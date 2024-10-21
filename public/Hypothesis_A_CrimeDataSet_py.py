# -*- coding: utf-8 -*-
"""07 person arrested.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1EMzSx6kpwOCyY_tGUW0koXNbi4bRf07p
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings('ignore')

from scipy.stats import chi2_contingency, ttest_ind

!gdown 1DGxcFFaxZPiw2f5OHHTrfguazJEgfmK9

# prompt: read /content/CleanedCrimeDataset.xlsx and give data read sheet 07 person arrested

import pandas as pd

# Read the Excel file
df = pd.read_excel("/content/CleanedCrimeDataset.xlsx", sheet_name="07 person arrested")

# Print the data
# print(df.head(1))
print(df.info())
print(df.describe())

"""
### 1. **Gender-Based Analysis:**
   - **Hypothesis**: There is no significant difference between the number of males and females arrested for the same crime.
   - **Test**: Use a t-test or chi-square test to compare the means or proportions of males and females arrested.

"""

contingency_table = df[['Male Total', 'Female Total']].values

print("Any zeros in the table:", np.any(contingency_table == 0))

contingency_table = contingency_table[np.all(contingency_table != 0, axis=1)]
print("Contingency Table after removing zeros:", contingency_table)

chi2_stat, p_val, dof, expected = chi2_contingency(contingency_table.T)
print(f'Chi-Square Test: p-value = {p_val}')

t_stat, t_p_val = ttest_ind(df['Male Total'], df['Female Total'])
print(f'T-Test: p-value = {t_p_val}')

"""A p-value of 0.0 (which is less than the typical significance level of 0.05) means **we reject the null hypothesis**. This indicates that there is a significant difference in the proportions of males and females arrested."""

df







"""
### 2. **State Comparison Analysis:**
   - **Hypothesis**: The number of persons arrested for a specific crime does not differ significantly between states.
   - **Test**: Use a chi-square test to compare the arrest numbers across different states."""

df['STATE/UT'].value_counts()

specific_crime_df = df[df['CRIME HEAD'] == "MURDER (SECTION 302 IPC)"]

data = specific_crime_df[['STATE/UT', 'Male Total', 'Female Total']]
print(data.head())

contingency_table = data.set_index('STATE/UT').values[:]
contingency_table
print("Any zeros in the table:", (contingency_table == 0).any())

contingency_table = contingency_table[(contingency_table != 0).all(axis=1)]
print("Contingency Table:\n", contingency_table)

chi2_stat, p_val, dof, expected = chi2_contingency(contingency_table)

print(f'Chi-Square Test: chi2_stat = {chi2_stat}, p-value = {p_val}, degrees of freedom = {dof}')
# print("Expected Frequencies:\n", expected)

"""**This p-value is extremely small
the number of persons arrested for "Murder (SECTION 302 IPC)" significantly differs between states**
"""

# Define a function for pairwise comparison
def compare_states(state1, state2):
    # Subset the data for the two states
    data = df[df['STATE/UT'].isin([state1, state2])]

    # Create a contingency table
    contingency_table = data[['Male Total', 'Female Total']].values

    # Remove rows with zero elements in the table
    contingency_table = contingency_table[np.all(contingency_table != 0, axis=1)]

    # If the contingency table is empty after removing rows with zero values, skip the comparison
    if contingency_table.size == 0:
        print(f'Comparison between {state1} and {state2}: Skipped because all rows contained zero values.')
        return

    # Perform chi-square test
    chi2_stat, p_val, dof, expected = chi2_contingency(contingency_table)

    # Check for zero elements in the expected frequencies
    if np.any(expected == 0):
        print(f'Comparison between {state1} and {state2}: Skipped due to zero values in the expected frequencies.')
        return

    print(f'Comparison between {state1} and {state2}:')
    print(f'p-value = {p_val}')

# Example pairs based on geographical proximity
pairs = [
    ('Andhra Pradesh', 'Tamil Nadu'),
    ('Karnataka', 'Kerala'),
    ('Maharashtra', 'Gujarat'),
    ('West Bengal', 'Odisha'),
    ('Punjab', 'Haryana'),
    ('Rajasthan', 'Madhya Pradesh'),
    ('Bihar', 'Jharkhand'),
    ('Uttar Pradesh', 'Uttarakhand'),
    ('Chhattisgarh', 'Telangana'),
    ('Himachal Pradesh', 'Jammu and Kashmir')
]

# Perform pairwise comparison for each pair
for state1, state2 in pairs:
    compare_states(state1, state2)

"""### 5. **Trend Analysis Over Time (if the dataset includes multiple years):**
   - **Hypothesis**: The number of arrests for specific crimes has not changed significantly over the years.
   - **Test**: Use a time series analysis or repeated measures ANOVA to evaluate the trends over the years.
"""


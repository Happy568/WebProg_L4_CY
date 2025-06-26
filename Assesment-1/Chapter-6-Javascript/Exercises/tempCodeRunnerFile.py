import pandas as pd
df = pd.read_excel("Finances-secret.xlsx", engine="openpyxl")
print(df.head())
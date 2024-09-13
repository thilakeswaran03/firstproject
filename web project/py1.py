from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from external sources (your HTML file)

# Load the Excel sheet
excel_file = 'C:\Users\admin\OneDrive\Desktop\web project\data.csv'  # Using raw string to handle backslashes
df = pd.read_excel(excel_file)

@app.route('/check_eligibility', methods=['POST'])
def check_eligibility():
    data = request.json
    reg_no = data.get('regNo')
    sub_mand = data.get('subMand')
    
    # Check eligibility logic: If the subject is in the Excel sheet, it is NOT eligible; otherwise, it is eligible
    if sub_mand in df['subMand'].values:
        eligible = False
    else:
        eligible = True
    
    # Return JSON response to the frontend
    return jsonify({'eligible': eligible})

if __name__ == '__main__':
    app.run(debug=True)

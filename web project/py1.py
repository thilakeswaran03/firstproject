from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load the Excel sheet
excel_file = 'path_to_your_excel_file.xlsx'
df = pd.read_excel(excel_file)

@app.route('/check_eligibility', methods=['POST'])
def check_eligibility():
    data = request.json
    name = data['name']
    reg_no = data['regNo']
    year = data['year']
    sub_mand = data['subMand']
    
    # Check eligibility logic
    # Example logic - you need to adjust according to your actual requirements
    # df should have columns 'year', 'subMand' for eligibility check
    eligible = df[(df['year'] == year) & (df['subMand'] == sub_mand)].shape[0] > 0
    
    return jsonify({'eligible': eligible})

if __name__ == '__main__':
    app.run(debug=True)

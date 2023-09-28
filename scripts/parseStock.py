

import pandas as pd
import yaml 
import re

import datetime
import os

import json


def create_output_folder(folder_path):
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)


keys = {

}

sources = []
with open('config.yaml', 'r') as file :
   config = yaml.safe_load(file)
   sources = config.get('stock')


def writeToFile(data) :
    current_timestamp = str(datetime.datetime.now().timestamp())
    fileName = "stock_"+current_timestamp+".json"
    outputDest = "output/"+fileName
    create_output_folder("output")
    with open(outputDest,'w') as f:
        jsonData = json.dumps(data)
        f.write(jsonData)
        f.close()

def parseStock(data) :
    split_string = re.split(r'-', data)
    code = split_string[0]
    name = split_string[1]
    familyCode = code[0:4]

    return {
        'code': int(code),
        'name': name,
        'familyCode': int(familyCode)
    }



def parseExcel(source) :
    df = pd.read_excel(source)
    regex = r'^\d{6}-[\w+\s]+$'

    json = []

    for row_index, row in df.iterrows():
        data = row['Unnamed: 1']
        if(isinstance(data, str)) :
            isStock = re.search(regex, data)
            if (isStock) : 
                json.append(parseStock(data))
    writeToFile(json)            


            

    


for source in sources :
    parseExcel(source)


 
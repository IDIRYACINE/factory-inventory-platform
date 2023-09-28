

import pandas as pd
import yaml 
import re

import datetime
import os

import json
import math


def create_output_folder(folder_path):
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)


keys = {
    "code" : "Unnamed: 1",
    "name" : "Unnamed: 2",
    "affectation" : "Unnamed: 7",
    "price" : "Unnamed: 15"
}

sources = []
with open('config.yaml', 'r') as file :
   config = yaml.safe_load(file)
   sources = config.get('stock')


def writeToFile(data) :
    current_timestamp = str(datetime.datetime.now().timestamp())
    fileName = "inventory_"+current_timestamp+".json"
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

    return code

def is_numeric(string):
  
  regex = r'^[0-9]+$'

  match = re.match(regex, string.replace(' ',''))

  return match is not None

def parseInventory(data,stockCode) :
    code = data[keys['code']]
    name = data[keys['name']]
    affectation = data[keys['affectation']]
    price = data[keys['price']]
    familyCode = code[0:4]

    return {
        'code': int(code),
        'name': name,
        'affectation': affectation.replace(' ',''),
        'price': float(price),
        'stockCode': int(stockCode),
        'familyCode': int(familyCode)
    }


def parseExcel(source) :
    df = pd.read_excel(source)
    regex = r'^\d{6}-[\w+\s]+$'

    json = []

    stockCode = ''

    for row_index, row in df.iterrows():
        data = row['Unnamed: 1']

        if(isinstance(data, str)) :
            isStock = re.search(regex, data)
            isNum = is_numeric(data)

            if (isStock) : 
                stockCode = parseStock(data)

            elif(isNum) :
                json.append(parseInventory(row,stockCode))    


       

    writeToFile(json)            


            

    


for source in sources :
    parseExcel(source)


 
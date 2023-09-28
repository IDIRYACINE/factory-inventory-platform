

files =['parseStock','parseInventory']


for file in files :
    with open(file+".py") as f:
        exec(f.read())
        f.close()
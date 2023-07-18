import re
import glob
import fnmatch

CPY = """@copyright Copyright"""
path = "./**/*.ts"

findings = []


def printPositive(file):
    print('[X]', file)


def printNegative(file):
    print('[ ]', file)


def addToNegativeList(file):
    findings.append(file)


for path in glob.glob(path, recursive=True):

    with open(path) as f:

        filtered = fnmatch.filter(f, CPY)
        print(filtered)

        # if CPY in f.read():
        #     printPositive(path)
        # else:
        #     printNegative(path)
        #     addToNegativeList(path)

print("----------------------------------------------------")
if findings:

    print("Please check following files: \n")
    for finding in findings:
        print("\t", finding)
else:
    print("404: No files found!")
print("----------------------------------------------------")

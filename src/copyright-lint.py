import sys
import re
import glob
import fnmatch

CPY = """@copyright Copyright"""
path = "./**/*.ts"

COPYRIGHT_REGEX = """/(?:copyright[ \t]*)?\(c\)[ \t]+(?:19|20)[0-9]{2}(?: - (?:19|20)[0-9]{2})? ACME GmbH - All Rights Reserved\. ACME,(?:\n\/\/)? ACME\.com are trademarks of ACME AG/gmi"""

findings = []


def printPositive(file):
    print('[X]', file)


def printNegative(file):
    print('[ ]', file)


def addToNegativeList(file):
    findings.append(file)

def scan(path, regexPattern):
    print("PATH >>> ", path)

    for path in glob.glob(path, recursive=True):

        with open(path) as f:

            print("file >>> ", f)

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

if __name__ == "__main__":

    if len(sys.argv) == 1:
        print(
            '!!! \U0001F40D ERROR: Please provide a root-patch, a file-extension to scan and a regex to match copyright \U0001F40D !!!')
    else:
        # root = sys.argv[1]  # root path
        # file_ext = sys.argv[2]  # file extension
        # regex = sys.argv[3]  # copyright regex

        root = ' '.join(sys.argv[1:])
        file_ext = ' '.join(sys.argv[2:])
        regex = ' '.join(sys.argv[3:])

        print(root)    
        print(file_ext)
        print(regex)
        
        scan(root + file_ext, regex)
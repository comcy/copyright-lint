import sys
import re
from re import search
import glob

CPY = """@copyright Copyright"""

COPYRIGHT_REGEX = '(?:copyright[ \t]*)?\(c\)[ \t]+(?:20)[0-9]{2}(?: - (?:20)[0-9]{2})? ACME GmbH - All Rights Reserved\.(?:\n\/\/)? ACME, ACME\.com are trademarks of ACME AG'
comp = re.compile(COPYRIGHT_REGEX, re.MULTILINE | re.IGNORECASE)


findings = []


def printPositive(file):
    print('[X]', file)


def printNegative(file):
    print('[ ]', file)


def addToNegativeList(file):
    findings.append(file)


def scan(path, regexPattern=comp):
    for path in glob.glob(path, recursive=True):

        with open(path) as file:
            # with open(path) as f:

            print("file >>> ", file)
            filetext = file.read()

            print("filetext >>> \n", filetext)
            # file.close()

            matches = re.findall(regexPattern, str(filetext))
            print("match >>> ", matches)

        # print("file >>> ", f)

        # filtered = fnmatch.filter(f, regexPattern)
        # print(filtered)

        # if CPY in f.read():
        #     printPositive(path)
        # else:
        #     printNegative(path)
        #     addToNegativeList(path)


if __name__ == "__main__":

    if len(sys.argv) == 1:
        print(
            '!!! \U0001F40D ERROR: Please provide a root-patch, a file-extension to scan and a regex to match copyright \U0001F40D !!!')
    else:
        root = sys.argv[1]  # root path
        file_ext = sys.argv[2]  # file extension
        regex = sys.argv[3]  # copyright regex

        scan(root + file_ext, regex)

        print("\n")
        print("----------------------------------------------------")
        print("----------------- SUMMARY --------------------------")
        print("----------------------------------------------------")
        if findings:
            print("Please check following files: \n")
            for finding in findings:
                print("\t", finding)
        else:
            print("\t >>> 404: No files found! <<<")
        print("----------------------------------------------------")
        print("----------------------------------------------------")

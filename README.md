# COPYRIGHT LINT

This is a simple script for checking source code files for existing copyright header information.

## Usage

**Parameters**

- `path`: root directory to start the scan
- `detectPattern`: REGEX pattern to scan for copyright matches
- `fileExtension`: file extensions which should be scanned

## Sample Regex

The following pattern shows a standard copyright regex pattern matching copyrght notice from ACME company.

```
/(?:copyright[ \t]*)?\(c\)[ \t]+(?:19|20)[0-9]{2}(?: - (?:19|20)[0-9]{2})? ACME GmbH - All Rights Reserved\. ACME,(?:\n\/\/)? ACME\.com are trademarks of ACME AG/gmi

```

```
(?:copyright[ \t]*)?\(c\)[ \t]+(?:20)[0-9]{2}(?: - (?:20)[0-9]{2})? ACME GmbH - All Rights Reserved\.(?:\n\/\/)? ACME, ACME\.com are trademarks of ACME AG
```

With matching comment signs:

```
\/\*\*\s*\n\s*\*\s*@copyright Copyright \(c\) \d{4} [A-Za-z\s]+\s*\n\s*\*\s*\*\/
```

```
\/\* Copyright \(c\) \d{4} [^\*]+ \*\/
```

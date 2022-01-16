# license-key-generator-module
A small libary to aid in the generation of license keys (not cryptographically significant)

Requires some dependent code from shay-libs but these should be easy enough to create if you read through what it's doing.

The return format looks something like this: 0A0M-937M-KS31-PR4V (each character is randomly generated)
This is assuming that:
- the key_length is set to 16
- the delimiter is set to "-"
- the delimiter_step is set to 4

These can be modified to generate different key sizes as needed. For best results, ensure the delimiter step is a factor of the key_length

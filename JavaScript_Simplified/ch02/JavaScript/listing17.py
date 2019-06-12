topics = """Types, Values, and Variables
Expressions and Operators
Statements
Objects
Arrays
Functions
Classes and Modules
Pattern Matching with Regular Expressions Chapter 11, JavaScript Subsets and Extensions
Server-Side JavaScript
Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values."""

for i in topics.split("\n"):
    print("\item ", i)

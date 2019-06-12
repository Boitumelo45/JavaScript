k= """break case catch continue debugger default
delete function do if else in
false instanceof finally new
return typeof switch var this void
throw while true with
abstract boolean byte char class const
double enum export extends final float
goto native implements package
import private int protected interface
public long short static super
synchronized throws transient volatile
for null try"""

k1 ="""arguments Array Boolean
Date decodeURI decodeURIComponent
encodeURI Infinity encodeURIComponent isFinite
Error isNaN eval JSON EvalError Math Function NaN
Number Object parseFloat parseInt RangeError ReferenceError
RegExp String SyntaxError TypeError undefined URIError"""

k2="""arguments Array Boolean Date
decodeURI decodeURIComponent
encodeURI Infinity encodeURIComponent
isFinite Error isNaN eval JSON EvalError
Math Function NaN Number
Object parseFloat parseInt
RangeError ReferenceError
RegExp String SyntaxError
TypeError undefined URIError"""

def returnList(string):
    for idx in string.split("\n"):
        print("\item {}".format(idx))

returnList(k2)

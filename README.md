# ValidScript
Vanilla JS Simple Validation Script <br>

> [!WARNING]
> This library is still under development. However you may use if you want. This is just for fun.


To use:
- Download as Zip
- Paste file to your root project which you can access the assets of your application
- Include the script source "<script src="..path"></script>"
- Start using!

# USAGE<br>
## SETUP YOUR INPUT GROUP
```
<div class="form-group vals-row"> <----Add vals-row
    <input type="text" name="my_input" class="my-input" id="my-input">
    <span class="invalid-feedback"></span>  <----Add span with invalid-feedback class
</div>
```

## INITIALIZE VALIDSCRIPT WITHIN YOUR SCRIPT FILE OR YOUR  <br> `<script></script>`

`var v = ValidScript();`

## VALIDATE INPUT WITH MULTIPLE VALIDATION TYPES

```
v.validGroup('.my-input', [ 
    {
        type: ValidRxp.String,
        label: 'Nama'
    },
    {
        type: ValidRxp.Int,
        label: 'Umur'
    },
    {
        type: ValidRxp.Email,
        label: 'E-Mel'
    },
]);
```
## VALIDATE INPUT WITH ONE VALIDATION TYPES

```
//format v.validInt(selector,  label, key) <---- key parameter is OPTIONAL, label set to null if not needed
v.validInt('.my-input2', 'Umur');
```
## VALIDATE INPUT FOR FILE UPLOAD
```
//format v.validUpload(selector, label, extension_array, key) <---- extension_array [] (default) AND key MUST be included, label if not needed, set to null
//extension_array, [] if any extension is accepted, ['pdf', 'doc'] array will check against file extensions
v.validUpload('#my-file', 'File', ['pdf'], 'my_file');
```

## VALIDATE INPUT WITH USING INPUT NAME OR SUCH

```
//format v.validInt(selector,  label, key) <---- key parameter MUST be included, label set to null if not needed
v.validInt('input[name=my_input]', 'Age', 'my_input');
```

## VALIDATION RESULT
```
//Both ways return true if all validation are OK, else false

//CUSTOM if you want to handle error with a different response
v.pass(true, function(){
    //CUSTOM ERROR
});

//BASIC if validation fails, will just show an alert
v.pass();

//Your logic or such below if v.pass() is true
//If false, it will not run the code below v.pass()
```

## METHOD CHAIN
```
//You may validate as such
v.validMix();
v.validInt();

//OR
v.validMix().validInt().validRegularDate().validInt().pass();

//You may continue validating even after pass()
v.pass().validInt() 
```

## VALIDATION TYPES AVAILABLE AS OF NOW
```
v.validMix(selector, label); //Anything but must have a value
v.validInt(selector, label); //Only integer (1, 12)
v.validString(selector, label); //Only string (aa)
v.validEmail(selector, label); //Only email format (aa@aa.a)
v.validDouble(selector, label); //Only double (1.0, 0.11)
v.validReverseDate(selector, label); // 2020-01-02
v.validRegularDate(selector, label); // 02-01-2020
v.validDoubleInt(selector, label); // 1 or 2.5
v.validDateAndTime(selector, label); // 2020-01-02 H:i:s
v.validUpload(selector, label, extension_array, key);

v.validGroup(selector, []); // Any data, must supply an array of validation objects
//Objects format
{
  type: ValidRxp.(regex enum, see below),
  label: 'Some Label'
}
```

## REGEX OPTION AVAILABLE AS OF NOW
```
ValidRxp.Mix
ValidRxp.String
ValidRxp.Int
ValidRxp.Double
ValidRxp.Email
ValidRxp.ReverseDate
ValidRxp.RegularDate
ValidRxp.MixDoubleInt
ValidRxp.DateAndTime
```

## WILL ADD MORE STUFF SOON.






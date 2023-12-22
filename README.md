# ValidScript
Vanilla JS Simple Validation Script <br>

> [!WARNING]
> This library is still under development. However you may use if you want.


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


## Initialize ValidScript Within your script file or your "<script></script>", 

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
v.validInt('.my-input2', 'Umur');
```

## VALIDATION RESULT
```
//CUSTOM if you want to handle error with a different response
v.pass(true, function(){
    //CUSTOM ERROR
});

//BASIC if validation fails, will just show an alert
v.pass();
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






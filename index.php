<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input" id="my-input"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input2" id="my-input2"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input4" id="my-input4"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input5" id="my-input5"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input5" id="my-input5"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input6" id="my-input5"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input7" id="my-input5"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input8" id="my-input5"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input9" id="my-input5"><br>
        <span class="invalid-feedback"></span>
    </div>
    <div class="form-group vals-row">
        <input type="text" name="my_input" class="my-input10" id="my-input5"><br>
        <span class="invalid-feedback"></span>
    </div>
    <br>
    <button id="submit">Submit</button>

    <script src="validation/validscript.js"></script>
    <script>
        document.getElementById("submit").onclick = function(){
            let startTime = performance.now();

            var v = ValidScript();
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
            v.validInt('.my-input2', 'Umur');
            v.validEmail('.my-input4', 'Some');
            v.pass(true, function(){
                alert(2);
            });
        }
    </script>
</body>
</html>
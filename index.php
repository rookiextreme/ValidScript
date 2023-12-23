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
        <input type="file" name="my-file" class="my-file" id="my-file"><br>
        <span class="invalid-feedback"></span>
    </div>
    <br>
    <button id="submit">Submit</button>

    <script src="../ValidScript/validscript.js"></script>
    <script>
        document.getElementById("submit").onclick = function(){
            var v = ValidScript();
            // v.validGroup('.my-input', [
            //     {
            //         type: ValidRxp.String,
            //         label: 'Nama'
            //     },
            //     {
            //         type: ValidRxp.Int,
            //         label: 'Umur'
            //     },
            //     {
            //         type: ValidRxp.Email,
            //         label: 'E-Mel'
            //     },
            // ]);
            // v.validInt('input[name=my_input]', 'Age', 'my_input');
            // v.validUpload('#my-file', 'File', ['pdf'], 'my_file');
            // v.validEmail('.my-input4', 'Some');
            // v.pass(true, function(){
            //     alert(2);
            // });
            console.log(v.getFormData.entries)
        }
    </script>
</body>
</html>
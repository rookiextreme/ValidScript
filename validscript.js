const ValidRxp = {
    Mix: {
        override: true
    },
    String: {
        regex: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
        label: 'Mesti Hanya Mengandungi Aksara Dan Abjad Sahaja',
        override: false
    },
    Int: reObject = {
        regex: /^\d+$/,
        label: 'Mesti Hanya Mengandungi Digit',
        override: false
    },
    Double: {
        regex: /[^\.].+/,
        label: 'Mesti Hanya Dalam Format Berganda. Cth: 10.0',
        override: false
    },
    Email: {
        regex: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        label: 'Mesti Dalam Format E-mel Yang Benar. Cth: aaa@aaa.com',
        override: false
    },
    ReverseDate: {
        regex: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        label: 'Mesti Dalam Format E-mel Yang Benar. Cth: aaa@aaa.com',
        override: false
    },
    RegularDate: {
        regex: /^\d{2}-\d{2}-\d{4}$/,
        label: 'Mesti Dalam Format Tarikh Yang Betul DD-MM-YYYY',
        override: false
    },
    MixDoubleInt: {
        regex: /^[+-]?\d+(\.\d+)?$/,
        label: 'Mesti Hanya Dalam Format Berganda Atau Integer',
        override: false
    },
    DateAndTime: {
        regex: /^\d{2}-\d{2}-\d{4} (2[0-3]|[01][0-9]):[0-5][0-9]/,
        label: 'Mesti Hanya Dalam Format Tarikh Dan Masa',
        override: false
    }
}

function Validation(){
    this.validData = new FormData;
    this.formPass = true;
}

Validation.prototype = {
    pass: function(custom = false, func = () => {}){
        if(!this.formPass){
            if(custom){
                func();
            }else{
                alert('Validation Failed');
            }
        }

        return this;
    },
    validMix: function(selector){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.Mix, key);
        return this;
    },
    validString: function(selector, label = null, key = false){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.String, key);
        return this;
    },
    validInt: function(selector, label = null, key = false){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.Int, key);
        return this;
    },
    validDouble: function(selector, label = null, key = false){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.Double, key);
        return this;
    },
    validEmail: function(selector, label = null, key = false){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.Email, key);
        return this;
    },
    validReverseDate: function(selector, label = null, key = false){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.ReverseDate, key);
        return this;
    },
    validRegularDate: function(selector, label = null, key = false){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.RegularDate, key);
        return this;
    },
    validDoubleInt: function(selector, label = null, key = false){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.MixDoubleInt, key);
        return this;
    },
    validDateAndTime: function(selector, label = null, key = false){
        this.runValidation(selector, label, this.getValue(selector, key), ValidRxp.DateAndTime, key);
        return this;
    },
    validUpload: function(selector, label = null, key = false){
        this.runValidationUpload(selector, label, key);
        return this;
    },
    validGroup: function(selector, group = [], key = false){
        let erMsg = '';
        let grp_length = group.length;
        let getVal = this.getValue(selector);

        let e = this.checkEmpty(selector, getVal);
        if(e){
            this.formPass = false;
            return this;
        }

        if(grp_length > 0){
            let lastPosition = grp_length - 1;
            let combineReg = '';

            for(let x = 0; x < grp_length; x++){
                let type = group[x].type;
                let label = group[x].label;
                if(label == '' || typeof label == undefined){
                    label = '';
                }
                erMsg += label + ' ' + type.label + '<br>';
                combineReg += '('+ type.regex.source.replace('^', '') +')' + ( x == lastPosition ? '' : '|');
            }

            if(getVal.match(combineReg) == null){
                this.formPass = false;
                this.erDisplay(selector, '', erMsg);
            }else{
                this.clearErDisplay(selector);
                this.setValue(selector);
            }
            return this;
        }else{
            this.formPass = false;
            return this;
        }
    },
    checkEmpty: function(selector, getVal){
        if(getVal == '' || typeof getVal == undefined || typeof getVal == 'undefined'){
            console.log('ok');
            this.erDisplay(selector, '', 'Cannot Be Empty');
            return true;
        }else{
            return false;
        }
    },
    runValidation: function(selector, label, getVal , type, key = false){
        let override = type.override;
        let e = this.checkEmpty(selector, getVal);
        if(e){
            this.formPass = false;
            return;
        }

        if(override == false){
            this.clearErDisplay(selector);
            let testValue = getVal.match(type.regex);
            testValue == null ? this.erDisplay(selector, label, type.label) : this.setValue(selector, key);
        }else{
            this.setValue(selector);
        }
    },
    runValidationUpload: function(selector, label = null, extensions = [], key){
        let getVal = document.querySelector(selector).files[0];
        let e = this.checkEmpty(selector, getVal);

        if(e){
            this.formPass = false;
            return this;
        }

        if(extensions.length > 0){
            let fileName = getVal.name;
            let extension = fileName.split('.').pop();
            if(extensions.includes(extension)){
                this.setValue(selector, key, true);
                this.clearErDisplay(selector);
            }else{
                this.formPass = false;
                this.erDisplay(selector, label, ' Extension Not Valid');
            }
        }else{
            this.setValue(selector, key, true);
        }

        return this;
    },
    erDisplay: function(selector, label, message){
        if(label == '' || typeof label == undefined){
            label = '';
        }

        let iv_selector = this.getInvalidElement(selector);
        iv_selector.innerHTML = '';
        iv_selector.innerHTML = label + ' ' + message;
        iv_selector.setAttribute('style', 'color:red');
    },
    clearErDisplay: function(selector){
        let iv_selector = this.getInvalidElement(selector);
        iv_selector.innerHTML = '';
    },
    keyFormat:function(selector){
        return selector.replace(/[-]+/g, '_').replace(/[.]+/g, '').replace(/[#]+/g, '');
    },
    getValue: function(selector, key = false, upload = false){
        if((selector.match(/[#]/g) || []).length == 1){
            if(upload){
                return document.getElementById(selector.replace('#','')).files[0];
            }
            return document.getElementById(selector.replace('#','')).value;
        }else if((selector.match(/[.]/g) || []).length == 1){
            if(upload){
                return document.getElementsByClassName(selector.replace('.',''))[0].files[0];
            }
            return document.getElementsByClassName(selector.replace('.',''))[0].value;
        }else{
            if(key){
                if(upload){
                    return document.querySelector(selector).files[0];
                }
                return document.querySelector(selector).value;
            }
        }
    },
    setValue: function(selector, key = false, upload = false){
        this.validData.append(key ? key : this.keyFormat(selector), this.getValue(selector, key, upload));
    },
    getInvalidElement: function(selector){
        return document.querySelector(selector).closest('.vals-row').querySelector('.invalid-feedback');
    },
    getFormData: function(){
        return this.validData;
    }
}

function ValidScript(){
    return new Validation();
}
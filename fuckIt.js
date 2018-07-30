var adrtypesk = @DAO.lovs.getbyVCode("72");
            var adrtypepr = @DAO.lovs.getbyVCode("74");
            var typeOfPack = @DAO.lovs.getbyVCode("75");
            var unitId = @DAO.lovs.getbyVCode("7");
            console.log(adrtypepr+" lov rend "+adrtypesk);
            // socket.onmessage = function(event){
            //     var jsonObject = JSON.parse(event.data);
            //     if("alladdressforapp" == jsonObject.type){
            //         let obj = jsonObject.ardses.address[0];
            //         addressRender(obj);
            //     }
            // }
            //add address
            let status74 = [];
            let status72 = [];
            $('.add-adrs').on('click', (event)=>{
                let     parent      = event.target.offsetParent,
                        inputId     = $(parent).find('.sinp')[0].id,
                        inputValue  = $(parent).find('.sinp')[0].value;
                if(inputId === "invoiceout-makedin"){
                    socket.send(JSON.stringify({"type":"reqadrsproto", "tp":adrtypepr ,"address": `${inputValue}`}))
                }
                else if(inputId === "invoiceout-wh-adress"){
                    socket.send(JSON.stringify({"type":"reqadrsproto", "tp":adrtypesk ,"address": `${inputValue}`}))
                }
                socket.onmessage = function(event) {
                    var jsonObject = JSON.parse(event.data);
                    if("addaddressforapp" == jsonObject.type){
                        let compId = $('#org-select')[0].value;
                        let obj = jsonObject.ards;
                        obj.comp_id = compId;

                        if(obj.address_type_id === adrtypepr.toString()){
                            status74.push(obj)
                            let option = `<option selected class="adress-opt" value="${obj.row_id}">${obj.full_address}</option>`
                            $('#make-adress-select').append(option);
                        } else if(obj.address_type_id === adrtypesk.toString()){
                            status72.push(obj);
                            let option = `<option selected class="adress-opt" value="${obj.row_id}">${obj.full_address}</option>`
                            $('#adress-select').append(option);
                        }
                    }
                };

                $(parent).find('.sinp')[0].value = ' ';

            });
            //render orgs address
            function addressRender(data){
                dataObj = data.address;
                if(dataObj.length === 0){
                    console.log('undf')
                    $('.adress-opt-wh').remove();
                    $('.adress-opt').remove();
                } else if(dataObj[0].address_type_id === adrtypepr){
                    $('.adress-opt').remove();
                }else if(dataObj[0].address_type_id === adrtypesk){
                    console.log('undf')
                    $('.adress-opt-wh').remove();
                }
                for(key in dataObj){

                    if(dataObj[0].address_type_id === adrtypesk.toString()){

                        let option = `<option class="adress-opt-wh" value="${dataObj[key].row_id}">${dataObj[key].full_address}</option>`
                        $('#adress-select').append(option);
                    }
                    else if(dataObj[key].address_type_id === adrtypepr.toString()){

                        let option = `<option class="adress-opt" value="${dataObj[key].row_id}">${dataObj[key].full_address}</option>`
                        $('#make-adress-select').append(option);

                    }
                    else{
                        console.log('matching nothing')
                    }

                }
                $('.preloader').css('opacity', '0')
            }
            //prerender adress
            $(document).ready(()=>{
                let org = $('#org-select')[0].value;
                $.ajax({
                    method: "GET",
                    url: `/orgaddr/${org}/74`
                }).done(function(data) {
                    console.log(data)
                    addressRender(data);

                });
                $.ajax({
                    method: "GET",
                    url: `/orgaddr/${org}/72`
                }).done(function(data) {
                    console.log(data)
                    addressRender(data);

                })


            });
            // event for render orgs address
            $('#org-select').on('change', (event)=>{
                // $('.preloader').css('opacity', '1');
                let org = $('#org-select')[0].value;
                // socket.send(JSON.stringify({"type":"alladrsproto", "tp":"72" ,"orgid": org.toString()}));
                // socket.send(JSON.stringify({"type":"alladrsproto", "tp":"74" ,"orgid": org.toString()}));
                // socket.onmessage = function(event) {
                //     var jsonObject = JSON.parse(event.data);
                //     if("alladdressforapp" == jsonObject.type){
                //         let obj = jsonObject.ardses.address[0];
                //         addressRender(obj);
                //     }
                // };
                $.ajax({
                    method: "GET",
                    url: `/orgaddr/${org}/74`
                }).done(function(data) {
                    console.log(data)
                    addressRender(data);

                });
                $.ajax({
                    method: "GET",
                    url: `/orgaddr/${org}/72`
                }).done(function(data) {
                    console.log(data)
                    addressRender(data);

                });
            });


            //validate
            // Example starter JavaScript for disabling form submissions if there are invalid fields
            (function() {
                'use strict';
                window.addEventListener('load', function() {
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.getElementsByClassName('needs-validation');

                    // Loop over them and prevent submission
                    var validation = Array.prototype.filter.call(forms, function(form) {
                        console.log(form)
                        form.addEventListener('submit', function(event) {
                            if (form.checkValidity() === false) {
                                form.reportValidity()
                                event.preventDefault();
                                event.stopPropagation();
                            }
                                form.classList.add('was-validated');
                                createnewprofile();
                        }, false);
                    });
                }, false);
            })();
            //price demo
            $('#priceforunit').on('input', () => {

                let     price       = $('#priceforunit')[0].value,
                        unitIndex   = $('#invoiceout-currency')[0].options.selectedIndex,
                        unit        = $('#invoiceout-currency')[0].options[unitIndex].innerText;

                $('#demo-price').text(`${price}/${unit}`)
            });

            function optionalRow(arg){
                if(arg.id === 'invoiceout-cb1'){
                    $('.optional-row').css('display', 'none');
                    $('#pack-weight').prop('required', false);
                } else {
                    $('.optional-row').css('display', 'block');
                    $('#pack-weight').prop('required', true);
                }
            }
            function createnewprofile(event){
                event.preventDefault();
                let data = {
                    //tech field
                    category_id:                '1',
                    type_app:                   '2',
                    time_from:                  Date.now().toString(),
                    time_by:                    Date.now().toString(),
                    production_date_by:         Date.now().toString(),
                    //first column
                    title:                      $('#invoiceout-ads-title')[0].value,
                    measurment:                 '',

                    //optional fields
                    type_of_packing_id:         typeOfPack.toString(),
                    quantity_of_pack:           '',
                    unit_id:                    unitId,

                    MQQ:                        $('#invoiceout-mindeal')[0].value,
                    SA:                         $('#invoiceout-maxdeal')[0].value,
                    deal_unit:                  $('#minmax-pack-weight')[0].value,
                    price:                      $('#priceforunit')[0].value,
                    price_unit:                 $('#invoiceout-currency')[0].value,
                    producting_address_id:      $('#make-adress-select')[0].value,
                    production_date:            $('#invoiceout-make-date')[0].value,
                    store_delivery_address_id:  $('#adress-select')[0].value,
                    ssize:                      $('#invoiceout-caliber')[0].value,
                    uusage:                     $('#invoiceout-maked-for')[0].value,
                    description:                $('#invoiceout_add_descript')[0].value,
                    //second column
                    comp_id:                    $('#org-select')[0].value,
                    type_of_payment:            $('#invoiceout-pack-paymenttype')[0].value,
                    payment:                    $('#invoiceout-paymentmethod')[0].value,
                    delivery_date:              $('#invoiceout-delivery')[0].value,
                    deadline_app:               $('#invoiceout-delivery-date')[0].value,
                    delivery:                   $('#invoiceout-delivery-type')[0].value,
                    own_production:             $('#invoiceout-cb3')[0].checked,
                    fixed_supplies:             $('#invoiceout-cb4')[0].checked,
                    prototype:                  $('#invoiceout-cb5')[0].checked,
                    image:                      $('#invoiceout-file-text')[0].value
                };
                for(key in data){
                    if (data[key] === '') data[key] = 'blank';

                    if(key === 'production_date'){
                        let newDate = new Date (data[key]);
                        data[key] = `${Date.parse(newDate)}`;
                    }
                    if(key === 'delivery_date'){
                        let newDate = new Date (data[key]);
                        data[key] = `${Date.parse(newDate)}`;
                    }
                    if(key === 'deadline_app'){
                        let newDate = new Date (data[key]);
                        data[key] = `${Date.parse(newDate)}`;
                    }
                }

                if($('#invoiceout-cb1')[0].checked){
                    data.measurment = true;
                }else{
                    data.measurment = false;
                    data.type_of_packing_id = $('#invoiceout-pack-type')[0].value;
                    data.quantity_of_pack = $('#pack-weight')[0].value;
                    data.unit_id = $('#invoiceout-pack-weight')[0].value;
                }
                console.log(data);
                dataSend(data, '/createnewapp');
            }
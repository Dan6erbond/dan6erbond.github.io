setInterval(function Send() {
                var NameInput = document.getElementById("NameInput").value;
                var Text = document.getElementById("Text").value;
                var Subject = document.getElementById("Subject").value;
                var Captcha = document.getElementById("Captcha").value;
                var mailTo = "mailto:ravianand.mohabir@stud.altekanti.ch?subject=" + Subject + "&body=" + Text + " \n Mit freundlichen Grüssen " + NameInput;
                document.getElementById("SendButton").setAttribute('href', mailTo);
                if (!NameInput || !Text || !Subject || parseInt(Captcha) != 25) {
                    document.getElementById("SendButton").setAttribute('href', "javascript:void(0)");
                    document.getElementById("CantSendYet").style.visibility = 'visible';
                }
                else
                    document.getElementById("CantSendYet").style.visibility = 'hidden';
            }, 10);
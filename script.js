
class Muessise{

  Isciler = [
    ["Jhon Doe", ],
    ["Full Satck Developer",],
    [ 3200,],
  ]

  constructor(SirketAdi, Filial) {
    this.SirketAdi = SirketAdi;
    this.Filial = Filial;
  }

  IscilerSiyahi() {
    let tbl = `<table class="table">
    <tr>
      <th scope="col">Row</th>
      <th scope="col">Ad Soyad</th>
      <th scope="col">Vezife</th>
      <th scope="col">Maas</th>
    </tr>`;
    let data = this.Isciler
    for (let i = 0; i < data[0].length; i++) {
      tbl += ` <tr>
      <th scope="row">${1 + i}</th>
      <td>${data[0][i]}</td>
      <td>${data[1][i]}</td>
      <td>${data[2][i]} AZN</td>
    </tr>`
    }
    tbl += "</table>";
    return tbl;

  }

  Gonder() {

    let data = this.Isciler
    let ad = document.getElementById("name").value;
    let vezife = document.getElementById("duty").value;
    let maas = document.getElementById("salary").value;

    data[0].push(ad);
    data[1].push(vezife);
    data[2].push(maas);

  }

}

let Yup = new Muessise("A MÜƏSSİSƏSİ", "Elimlər filialı");
document.getElementsByTagName("h1")[0].innerHTML = Yup.SirketAdi ; Yup.Filial;
document.getElementsByTagName("h2")[0].innerHTML = Yup.Filial;
document.getElementsByTagName("main")[0].innerHTML = Yup.IscilerSiyahi();


function isle() {
  let data = document.getElementsByTagName("input");

  if (data[0].value != "" && data[1].value != "" && data[2].value != "") {

    document.getElementsByTagName("main")[0].innerHTML = Yup.Gonder();
    document.getElementsByTagName("main")[0].innerHTML = Yup.IscilerSiyahi();

    for (i = 0; i <= 2; i++) {
      data[i].value = "";
    }

  } else if (data[0].value == "") {

    alert("Adi daxil edin")

  } else if (data[1].value == "") {

    alert("Vezifeni daxil edin")

  } else if (data[2].value == "") {

    alert("Maasi daxil edin")

  }
}









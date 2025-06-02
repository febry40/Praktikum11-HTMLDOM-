function kirimData() {
  event.preventDefault();
  
  var name = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var peminatanElement = document.querySelector("input[name=peminatan]:checked");
  var alamat = document.getElementById("alamat").value;
  var angkatan = document.getElementById("angkatan").value;
  var tanggal = document.getElementById("tanggal").value;

  
  if (!name) {
    alert("Nama harus diisi!");
    return;
  }
  
  if (!nim) {
    alert("NIM harus diisi!");
    return;
  }
  
  if (!peminatanElement) {
    alert("Pilih salah satu peminatan!");
    return;
  }
  
  if (!alamat) {
    alert("Alamat harus diisi!");
    return;
  }
  
  if (!angkatan) {
    alert("Pilih angkatan!");
    return;
  }
  
  if (!tanggal) {
    alert("Tanggal harus diisi!");
    return;
  }

  var peminatan = peminatanElement.value;

  alert(
    "Data berhasil dikirim!\n\n" +
    "Nama : " + name +
    "\nNIM : " + nim +
    "\nPeminatan : " + peminatan +
    "\nAlamat : " + alamat +
    "\nAngkatan : " + angkatan +
    "\nTanggal : " + tanggal
  );
}
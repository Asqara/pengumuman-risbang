const data = [
{ id: "G8401241008", name: "Cantika Mutiara Asmarandana", status: "Lulus" },
{ id: "M0401241071", name: "Darell Belva", status: "Lulus" },
{ id: "M0401241099", name: "Kholishotur Rofi'ah", status: "Lulus" },
{ id: "M0401241011", name: "Shabrina Nur Izzati", status: "Lulus" },
{ id: "M0401241015", name: "Nisrina Salsabila", status: "Lulus" },
{ id: "M0401241055", name: "Qanita Basimah Kurnia", status: "Lulus" },
{ id: "M0401241029", name: "Aurelia Fury", status: "Lulus" },
{ id: "M0401241084", name: "Cahya Raras Mitayani", status: "Lulus" },
{ id: "M0401241002", name: "Adi Pratama", status: "Lulus" },
{ id: "M0401241005", name: "Andhias Abdillah Ridho", status: "Lulus" },
{ id: "M0401241006", name: "Fadly Syabani Ardiansyah", status: "Lulus" },
{ id: "M0401241079", name: "Azka Raditya Hafidz", status: "Lulus" },
{ id: "A2401241134", name: "Muhamad Nabil", status: "Lulus" },
{ id: "F3401241100", name: "Mauliddio Lazuardi Wahyudin", status: "Lulus" },
{ id: "M0403241038", name: "Muhammad Haidar", status: "Lulus" },
{ id: "F2401241006", name: "Febriananta Rafa Fadilah", status: "Lulus" },
{ id: "M0401241016", name: "Najwa Salsabila M.N", status: "Lulus" },
{ id: "F2401241071", name: "Rasheed Al Kahfi Setiawan", status: "Lulus" },
{ id: "M0401241104", name: "Fitria Angelita Delvi", status: "Lulus" },
{ id: "G3401241074", name: "Ashila Air Widiarta", status: "Lulus" },
{ id: "M0403241050", name: "Ayubi Fathan", status: "Lulus" },
{ id: "G8401241065", name: "Zahra Maulida Sihaloho", status: "Lulus" },
{ id: "M0401241105", name: "Putra Ramadhana", status: "Lulus" },
{ id: "M0401241058", name: "Muhammad Khayruhanif", status: "Lulus" },
{ id: "G2401241056", name: "Kayla Salsabila", status: "Lulus" },
{ id: "C5401241073", name: "Ghalib Wiragana Nugroho", status: "Lulus" },
{ id: "E2401241027", name: "Adinda Agnia", status: "Lulus" },
{ id: "K1401241223", name: "M Ibrahim Arsyad", status: "Lulus" },
{ id: "F2401241075", name: "Nur Haya Hanifah", status: "Lulus" },
{ id: "M0401241044", name: "Panji Elang Permanajati", status: "Lulus" },
{ id: "M0401241114", name: "Dina Maulidia Putri", status: "Tidak Lulus" },
{ id: "M0401241086", name: "Aquila Putra Njatakoesoema", status: "Tidak Lulus" },
{ id: "C5401241060", name: "Nailah Afqaniah Gusnadi", status: "Tidak Lulus" },
{ id: "M0404241039", name: "Siti Alita Syakirah", status: "Tidak Lulus" },
{ id: "G8401241068", name: "Nabhaan Muhammad Qaaid", status: "Tidak Lulus" },
{ id: "A1401241050", name: "Siti Salwa Raudha Putri Zein", status: "Tidak Lulus" },
{ id: "F3401241055", name: "Haaris Fathurrahman Putra Kurnia", status: "Tidak Lulus" },
{ id: "M0401241066", name: "Abdullah' Ammar Rabbaniyyin", status: "Tidak Lulus" },
{ id: "G2401241043", name: "Thoriq Khairi Akbar", status: "Tidak Lulus" },
{ id: "K1401241864", name: "Rheina Alya Anjasmara", status: "Tidak Lulus" },
{ id: "M0403241122", name: "Muhammad Rezonaldo Yunus", status: "Tidak Lulus" },
{ id: "I3401241064", name: "Wafa Nur Azizah", status: "Tidak Lulus" },
{ id: "M0403241002", name: "Hauzan Ziyadatul Khoir", status: "Tidak Lulus" },
{ id: "M0401241010", name: "Retno Sari", status: "Tidak Lulus" },
{ id: "M0403241072", name: "Adillah Ridwan", status: "Tidak Lulus" },
{ id: "A4401241065", name: "Muhammad Fauzan As Syauqi Soelaiman", status: "Tidak Lulus" },
{ id: "D3401241021", name: "Dhika Seif Albaits", status: "Tidak Lulus" },
{ id: "H3401241106", name: "Mukhtar Faisal Hibatullah", status: "Tidak Lulus" },
{ id: "M0403241098", name: "Nanda Zahran Syafiq", status: "Tidak Lulus" },
{ id: "C2401241082", name: "Anandha Cello Galactica", status: "Tidak Lulus" },
{ id: "G4401241104", name: "Auliani Dwi Juni Zafir", status: "Tidak Lulus" },
{ id: "M0401241012", name: "Audryna Khairunnisa Wibisono", status: "Tidak Lulus" },
{ id: "M0401241020", name: "Joe Anthonie Oktavian", status: "Tidak Lulus" },
{ id: "M0401241037", name: "Naurah Aathirah farid", status: "Tidak Lulus" },
{ id: "M0401241028", name: "Ainur Roudlotul Jannah Firdaus", status: "Tidak Lulus" }
];

const successAudio = document.getElementById('successAudio');
const failureAudio = document.getElementById('failureAudio');

function searchResult() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    const motivationDiv = document.getElementById('motivation');

    const result = data.find(item => item.id.toLowerCase() === input || item.name.toLowerCase() === input);

    if (result) {
        resultDiv.textContent = `${result.name} (${result.id}): ${result.status}`;
        resultDiv.style.color = result.status === "Lulus" ? "green" : "red";

        if (result.status === "Lulus") {
            successAudio.play();
            failureAudio.pause();
            failureAudio.currentTime = 0;
            motivationDiv.textContent = "Terima kasih sudah mengikuti seleksi awak kapal Biro Riset Pengembangan. Kami dengan senang mengumumkan bahwa kamu lolos ke tahap wawancara! Petualangan menuju samudra PKU semakin dekat. Persiapkan dirimu sebaik mungkin, karena kami sangat menantikan untuk mengenalmu lebih lanjut.";
            motivationDiv.style.color = "green";
            document.getElementById("waButton").style.display = "block";
            document.getElementById("wwButton").style.display = "block";
        } else {
            failureAudio.play();
            successAudio.pause();
            successAudio.currentTime = 0;
            motivationDiv.textContent = "Terima kasih sudah mengikuti seleksi awak kapal Biro Riset Pengembangan. Sayangnya, kali ini kamu belum lolos ke tahap wawancara. Meskipun belum terpilih, kami sangat mengapresiasi usaha dan semangat yang telah kamu tunjukkan. Jangan berkecil hati, perjalananmu masih panjang dan kesempatan baru pasti akan datang. Terus semangat dan terus berusaha!";
            motivationDiv.style.color = "red";
        }
    } else {
        resultDiv.textContent = "Data tidak ditemukan.";
        resultDiv.style.color = "black";
        motivationDiv.textContent = "";
        successAudio.pause();
        successAudio.currentTime = 0;
        failureAudio.pause();
        failureAudio.currentTime = 0;
    }
}
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchResult();
    }
});
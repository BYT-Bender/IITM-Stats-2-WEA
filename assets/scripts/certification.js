// var logoDir = "assets/media/images/college-logos/";
var imgDir = "assets/media/images/certificates/"

const certificates = [
    {
        "title": "CSS (Basic)",
        "img": "HackerRank_CSS_Basic_Certificate.jpg",
        "organization": "HackerRank",
        "date": 2024,
        "credential_id": "8A0F85E742AD",
        "credential_url": "https://www.hackerrank.com/certificates/8a0f85e742ad"
    },
    {
        "title": "JavaScript (Basic)",
        "img": "HackerRank_JavaScript_Basic_Certificate.jpg",
        "organization": "HackerRank",
        "date": 2024,
        "credential_id": "CE7C5F591434",
        "credential_url": "https://www.hackerrank.com/certificates/ce7c5f591434"
    },
    {
        "title": "JavaScript (Intermediate)",
        "img": "HackerRank_JavaScript_Intermediate_Certificate.jpg",
        "organization": "HackerRank",
        "date": 2024,
        "credential_id": "4D2506F73CFB",
        "credential_url": "https://www.hackerrank.com/certificates/4d2506f73cfb"
    },
    {
        "title": "Java (Basic)",
        "img": "HackerRank_Java_Basic_Certificate.jpg",
        "organization": "HackerRank",
        "date": 2024,
        "credential_id": "58BFB1E3A2D0",
        "credential_url": "https://www.hackerrank.com/certificates/58bfb1e3a2d0"
    },
    {
        "title": "Python (Basic)",
        "img": "HackerRank_Python_Basic_Certificate.jpg",
        "organization": "HackerRank",
        "date": 2024,
        "credential_id": "15D0C19752AC",
        "credential_url": "https://www.hackerrank.com/certificates/15d0c19752ac"
    },
    {
        "title": "SQL (Basic)",
        "img": "HackerRank_SQL_Basic_Certificate.jpg",
        "organization": "HackerRank",
        "date": 2024,
        "credential_id": "D486DA3273FD",
        "credential_url": "https://www.hackerrank.com/certificates/d486da3273fd"
    },
    {
        "title": "SQL (Advanced)",
        "img": "HackerRank_SQL_Advanced_Certificate.jpg",
        "organization": "HackerRank",
        "date": 2024,
        "credential_id": "20DF297CD8AF",
        "credential_url": "https://www.hackerrank.com/certificates/20df297cd8af"
    },
    {
        "title": "SQL (Intermediate)",
        "img": "HackerRank_SQL_Intermediate_Certificate.jpg",
        "organization": "HackerRank",
        "date": 2024,
        "credential_id": "77B70DC0B29C",
        "credential_url": "https://www.hackerrank.com/certificates/77b70dc0b29c"
    }
];


var container = document.getElementById('certificate-gallery');

certificates.forEach(certificate => {
    const card = document.createElement('div');
    card.className = 'certificate-card';

    const img = document.createElement('img');
    img.id = certificate.credential_id;
    img.src = imgDir + certificate.img;
    img.alt = certificate.title;
    // img.onclick = enlargeImg(this);
    card.appendChild(img);

    container.appendChild(card);
});
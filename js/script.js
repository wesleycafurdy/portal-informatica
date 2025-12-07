import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnRkUc7sKFPrHY_mBawqc7myY5qNlYYjs",
  authDomain: "portal-informatica-oficial.firebaseapp.com",
  projectId: "portal-informatica-oficial",
  storageBucket: "portal-informatica-oficial.firebasestorage.app",
  messagingSenderId: "355685527682",
  appId: "1:355685527682:web:ddd346fd27519f9d02049b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("form-contato");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  try {
    await addDoc(collection(db, "mensagens"), {
      nome,
      email,
      mensagem,
      createdAt: serverTimestamp()
    });

    window.location.href = "obrigado.html";
  } catch (err) {
    alert("Não foi possível enviar agora. Tenta de novo.");
    console.error(err);
  }
});

const synopsis = 'Di sebuah kampung kecil, agama dijadikan tameng untuk merampas hak orang miskin. Beras bantuan warga dibawa kabur, dan mereka yang berbeda keyakinan diusir. Pak Setot, petani jujur, nyaris putus asa. Di sinilah Rudy, pengacara muda beringas, turun tangan. Keadilan bukan soal seiman atau tidak, tapi hak semua manusia. Saksikan duel argumen di ruang sidang.';
const sessions = [
  {chapter:'BAB I · HAK YANG SAMA', place:'court', speaker:'MBAK KALISTA', character:'kalista', line:'Bantuan dari warga non-Muslim itu haram! Klien saya hanya berusaha menjaga kemurnian kampung ini.', argument:'Bantuan ini murni sosial. Menolak bantuan untuk orang miskin karena beda keyakinan bertentangan dengan QS Al-Maidah ayat 8 yang memerintahkan berbuat adil kepada siapa pun.', thought:'(Kampret, bocah ini pintar.)', thoughtBy:'PAK RAYA', thoughtCharacter:'raya'},
  {chapter:'BAB I · HAK YANG SAMA', place:'court', speaker:'MBAK KALISTA', character:'kalista', line:'Pak Raya hanya menyampaikan informasi. Jangan membesar-besarkan kabar yang beredar di kampung.', argument:'Itu hasutan! Memecah belah persaudaraan dilarang keras dalam Islam, sebagaimana sabda Nabi: Barangsiapa memecah belah, bukan golonganku.', thought:'(Dia berani kutip hadis?!)', thoughtBy:'MBAK KALISTA', thoughtCharacter:'kalista'},
  {chapter:'BAB I · HAK YANG SAMA', place:'court', speaker:'PAK RAYA', character:'raya', line:'Semua ini demi ketertiban! Mereka yang berbeda seharusnya tahu diri dan pergi dari kampung kami.', argument:'Jangan campuradukkan hak dan batil. Fitnah untuk merampas hak orang lain adalah kezaliman!', thought:'(Awas kau, Rudy!)', thoughtBy:'PAK RAYA', thoughtCharacter:'raya'},
  {chapter:'BAB II · JEJAK BERAS BANTUAN', place:'court', speaker:'MBAK KALISTA', character:'kalista', line:'Keberatan, Yang Mulia! Klien saya tidak mencuri beras. Tuduhan itu sama sekali tidak berdasar.', argument:'Pak Raya mengkorupsi beras bantuan warga non-Muslim 4 bulan lalu. Ini kezaliman (QS Al-Baqarah: 195).', thought:'(Dari mana dia tahu soal beras?!)', thoughtBy:'MBAK KALISTA', thoughtCharacter:'kalista'},
  {chapter:'BAB II · JEJAK BERAS BANTUAN', place:'court', speaker:'PAK RAYA', character:'raya', line:'Beras itu sudah busuk! Saya hanya membuangnya supaya tidak membahayakan warga.', argument:'Bohong! Anda menjualnya ke pasar gelap. Memakan harta secara batil dilarang (QS An-Nisa: 29).', thought:'(Brengsek, rahasia pasar gelapku bocor!)', thoughtBy:'PAK RAYA', thoughtCharacter:'raya'},
  {chapter:'BAB II · JEJAK BERAS BANTUAN', place:'court', speaker:'MBAK KALISTA', character:'kalista', line:'Saksi itu cuma warga miskin. Kesaksiannya tidak sebanding dengan kedudukan klien saya.', argument:'Justru karena mereka lemah kita harus membela. Kemuliaan di hadapan Allah hanyalah takwa (QS Al-Hujurat: 13), bukan kekayaan.', thought:'(Hakim mulai berpihak padanya!)', thoughtBy:'MBAK KALISTA', thoughtCharacter:'kalista'},
  {chapter:'BAB II · JEJAK BERAS BANTUAN', place:'court', speaker:'PAK RAYA', character:'raya', line:'Aku pengurus kampung! Tidak ada yang bisa menghancurkanku hanya dengan cerita warga.', argument:'Membela warga non-Muslim yang dizalimi adalah wujud Ukhuwwah Insaniyah—persaudaraan kemanusiaan yang melampaui perbedaan.', thought:'(Kenapa semua orang mulai berani bicara?)', thoughtBy:'PAK RAYA', thoughtCharacter:'raya'},
  {chapter:'BAB III · KESAKSIAN YANG SETARA', place:'hall', speaker:'PAK HARTO', character:'', line:'Sidang diskors sejenak. Namun sidang tetap berada di gedung pengadilan. Rudy, tunjukkan bukti yang menguatkan kesaksian Pak Setot.', argument:'Pak Setot menyerahkan catatan pembagian beras di ruang sidang. Jumlah yang diterima warga tidak sesuai daftar—bukti harus dinilai tanpa memandang agama atau kedudukan.', thought:'(Catatan itu cocok dengan jumlah karung yang disembunyikan.)', thoughtBy:'PAK RAYA', thoughtCharacter:'raya'},
  {chapter:'BAB III · KESAKSIAN YANG SETARA', place:'hall', speaker:'PAK RAYA', character:'raya', line:'Catatan itu bisa dibuat siapa saja! Pak Setot hanya petani, ia tak paham urusan administrasi.', argument:'Jangan rendahkan kesaksian Pak Setot karena pekerjaannya. Musawah mengajarkan kesetaraan martabat; buktinya harus diperiksa dengan adil.', thought:'(Mengapa latar belakang saksi tak lagi bisa kupakai?)', thoughtBy:'PAK RAYA', thoughtCharacter:'raya'},
  {chapter:'BAB III · KESAKSIAN YANG SETARA', place:'court', speaker:'MBAK KALISTA', character:'kalista', line:'Warga yang berbeda keyakinan itu tidak punya hak menuntut keputusan kampung!', argument:'Hak warga tidak ditentukan oleh keyakinan. Tasamuh berarti menghormati perbedaan tanpa merampas hak siapa pun.', thought:'(Aku kehabisan alasan untuk membenarkan pengusiran ini.)', thoughtBy:'MBAK KALISTA', thoughtCharacter:'kalista'},
  {chapter:'BAB IV · KEBENARAN TERUNGKAP', place:'court', speaker:'PAK RAYA', character:'raya', line:'Tidak ada bukti saya menjual beras itu. Semua karung sudah hilang begitu saja.', argument:'Daftar karung dan catatan pembagian menunjukkan jumlah yang sama dengan beras yang dijual. Bukti saling menguatkan; kebenaran tidak bisa ditutupi.', thought:'(Mereka menyusun semua jejaknya dengan rapi.)', thoughtBy:'PAK RAYA', thoughtCharacter:'raya'},
  {chapter:'BAB IV · KEBENARAN TERUNGKAP', place:'court', speaker:'MBAK KALISTA', character:'kalista', line:'Klien saya bertindak demi ketertiban. Mungkin warga itu sebaiknya memaafkan saja.', argument:'Memaafkan tidak berarti membiarkan kezaliman. Hak warga harus dipulihkan dan perbuatan salah dipertanggungjawabkan secara adil.', thought:'(Aku tak bisa lagi menyebut ketidakadilan sebagai ketertiban.)', thoughtBy:'MBAK KALISTA', thoughtCharacter:'kalista'},
  {chapter:'BAB IV · KEBENARAN TERUNGKAP', place:'court', speaker:'PAK RAYA', character:'raya', line:'Aku mengakui beras itu dijual. Tapi kampung ini tetap milik orang-orang seperti kami!', argument:'Kampung adalah rumah bersama. Ukhuwwah, tasamuh, dan musawah menuntut kita hidup berdampingan dengan damai dan setara.', thought:'(Kekuasaanku berakhir di ruang sidang ini.)', thoughtBy:'PAK RAYA', thoughtCharacter:'raya'},
  {chapter:'BAB V · PUTUSAN', place:'court', speaker:'PAK HARTO', character:'', line:'Cukup! Pengadilan menetapkan hak warga harus dipulihkan, beras bantuan diganti, dan pengusiran dihentikan. Semua warga setara di hadapan hukum.', argument:'Keadilan bukan milik satu golongan. Dengan tasamuh, musawah, dan ukhuwwah, perbedaan menjadi alasan untuk saling menjaga—bukan saling menyingkirkan.', thought:'(Hari ini, keadilan akhirnya berbicara untuk semua.)', thoughtBy:'PAK SETOT', thoughtCharacter:'setot'}
];

const $ = (id) => document.getElementById(id);
const intro = $('intro');
const courtroom = $('courtroom');
const synopsisEl = $('synopsis');
const startButton = $('startButton');
const dialogueText = $('dialogueText');
const speakerName = $('speakerName');
const continueButton = $('continueButton');
const typingPanel = $('typingPanel');
const targetText = $('targetText');
const argumentInput = $('argumentInput');
const typingMirror = $('typingMirror');
const typingStatus = $('typingStatus');
const submitButton = $('submitButton');
const objectionFlash = $('objectionFlash');
let index = 0;
let soundOn = true;
let audioContext = null;
let typeTimer = 0;
let introTimer = 0;
let typedCharacterCount = 0;
let lock = false;

function getAudio() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioContext = new AudioCtx();
  }
  if (audioContext?.state === 'suspended') audioContext.resume();
  return audioContext;
}
function beep() {
  if (!soundOn) return;
  const ctx = getAudio();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 620 + Math.random() * 170;
  gain.gain.setValueAtTime(.018, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .035);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + .04);
}
function setCharacters(active) {
  document.querySelectorAll('.character').forEach(el => el.classList.remove('active'));
  if (active) document.querySelector(`.character-${active}`)?.classList.add('active');
}
function typeText(element, text, {italic = false, done = () => {}} = {}) {
  clearInterval(typeTimer);
  element.textContent = '';
  let pos = 0;
  typeTimer = window.setInterval(() => {
    if (pos >= text.length) {
      clearInterval(typeTimer);
      if (italic) element.innerHTML = `<em>${escapeHTML(text)}</em>`;
      done();
      return;
    }
    element.textContent += text[pos++];
    if (element.scrollHeight - element.scrollTop < element.clientHeight + 20) element.scrollTop = element.scrollHeight;
    if (element.textContent.trim() && (pos % 2 === 0 || text[pos - 1] === ' ')) beep();
  }, italic ? 22 : 24);
}
function escapeHTML(text) { return text.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
function setDialogue(name, text, options = {}) {
  speakerName.textContent = name;
  dialogueText.classList.toggle('inner-thought', !!options.italic);
  continueButton.hidden = true;
  typeText(dialogueText, text, {italic:options.italic, done:() => { continueButton.hidden = false; }});
}
function beginIntro() {
  let pos = 0;
  introTimer = window.setInterval(() => {
    if (pos >= synopsis.length) {
      clearInterval(introTimer);
      startButton.hidden = false;
      return;
    }
    synopsisEl.textContent += synopsis[pos++];
  }, 33);
}
function updateProgress() {
  $('chapterLabel').textContent = sessions[index].chapter;
  $('progressText').textContent = `SESI ${String(index + 1).padStart(2, '0')} / 14`;
  const hp = Math.max(0, 100 - Math.min(index, 10) * 10);
  $('hpValue').textContent = `${hp}%`;
  $('hpFill').style.width = `${hp}%`;
  $('hpFill').classList.toggle('empty', hp === 0);
}
function beginSession() {
  if (index >= sessions.length) return finishGame();
  const data = sessions[index];
  courtroom.classList.toggle('hallway', data.place === 'hall');
  $('locationLabel').textContent = data.place === 'hall' ? 'GEDUNG PENGADILAN · LORONG SIDANG' : 'GEDUNG PENGADILAN · RUANG SIDANG';
  $('sceneLabel').textContent = data.place === 'hall' ? 'LORONG SIDANG' : 'RUANG SIDANG';
  updateProgress();
  typingPanel.hidden = true;
  continueButton.textContent = 'BANTAHAN';
  continueButton.onclick = openTyping;
  setCharacters(data.character);
  setDialogue(data.speaker, data.line);
}
function openTyping() {
  clearInterval(typeTimer);
  continueButton.hidden = true;
  typingPanel.hidden = false;
  targetText.textContent = sessions[index].argument;
  argumentInput.value = '';
  argumentInput.disabled = false;
  typingPanel.querySelector('.input-wrap').classList.remove('has-value');
  typingStatus.textContent = 'Ketik sesuai argumen di atas. Tekan Enter saat selesai.';
  submitButton.disabled = true;
  updateTypingMirror();
  window.setTimeout(() => argumentInput.focus({preventScroll:true}), 80);
}
function updateTypingMirror() {
  const expected = sessions[index].argument;
  const value = argumentInput.value;
  let html = '';
  for (let i = 0; i < value.length; i++) {
    const cls = i >= expected.length ? 'extra' : (value[i] === expected[i] ? 'correct' : 'incorrect');
    html += `<span class="${cls}">${escapeHTML(value[i])}</span>`;
  }
  if (!value.length) html = '';
  typingMirror.innerHTML = html;
  typingMirror.scrollTop = argumentInput.scrollTop;
  typingMirror.scrollLeft = argumentInput.scrollLeft;
  const exact = value === expected;
  const matchingPrefix = expected.startsWith(value);
  submitButton.disabled = !exact || lock;
  typingPanel.querySelector('.input-wrap').classList.toggle('has-value', value.length > 0);
  if (!value) typingStatus.textContent = 'Ketik sesuai argumen di atas. Tekan Enter saat selesai.';
  else if (exact) typingStatus.textContent = 'Argumen tepat. Tekan Enter atau tombol KIRIM BANTAHAN.';
  else if (!matchingPrefix) typingStatus.textContent = 'Ada salah ketik—huruf merah perlu diperbaiki.';
  else typingStatus.textContent = `${value.length} / ${expected.length} karakter`;
}
function submitArgument() {
  if (lock) return;
  if (argumentInput.value !== sessions[index].argument) {
    typingStatus.textContent = 'Belum tepat. Periksa huruf merah, tanda baca, dan spasi.';
    argumentInput.focus();
    return;
  }
  lock = true;
  argumentInput.disabled = true;
  submitButton.disabled = true;
  const hp = Math.max(0, 100 - Math.min(index + 1, 10) * 10);
  $('hpValue').textContent = `${hp}%`;
  $('hpFill').style.width = `${hp}%`;
  typingPanel.hidden = true;
  objectionFlash.classList.add('show');
  objectionFlash.setAttribute('aria-hidden', 'false');
  setCharacters(sessions[index].thoughtCharacter);
  // The objection banner intentionally remains visible for the full nine seconds.
  window.setTimeout(() => {
    objectionFlash.classList.remove('show');
    objectionFlash.setAttribute('aria-hidden', 'true');
    const data = sessions[index];
    setDialogue(data.thoughtBy, data.thought, {italic:true});
    continueButton.textContent = index === sessions.length - 1 ? 'LIHAT PUTUSAN' : 'LANJUTKAN SIDANG';
    continueButton.onclick = () => {
      lock = false;
      index++;
      beginSession();
    };
    lock = false;
  }, 9000);
}
function finishGame() {
  typingPanel.hidden = true;
  continueButton.hidden = true;
  setCharacters('setot');
  $('endingText').textContent = 'Pak Setot dan warga menerima pemulihan hak mereka. Pak Raya harus mengganti beras bantuan yang dirampas, sementara pengusiran dihentikan. Perbedaan keyakinan bukan alasan untuk merampas martabat—keadilan berlaku bagi semua.';
  $('endScreen').hidden = false;
  $('progressText').textContent = 'SIDANG SELESAI';
}
function resetGame() {
  index = 0;
  lock = false;
  $('endScreen').hidden = true;
  courtroom.classList.remove('hallway');
  beginSession();
}

argumentInput.addEventListener('input', () => {
  updateTypingMirror();
  const current = argumentInput.value.length;
  if (current > typedCharacterCount) beep();
  typedCharacterCount = current;
});
argumentInput.addEventListener('scroll', () => {
  typingMirror.scrollTop = argumentInput.scrollTop;
  typingMirror.scrollLeft = argumentInput.scrollLeft;
});
argumentInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (!submitButton.disabled) submitArgument();
    else if (argumentInput.value !== sessions[index].argument) {
      typingStatus.textContent = 'Perbaiki huruf merah terlebih dahulu, lalu tekan Enter.';
    }
  }
});
submitButton.addEventListener('click', submitArgument);
continueButton.addEventListener('click', () => {});
startButton.addEventListener('click', () => {
  getAudio();
  intro.hidden = true;
  courtroom.hidden = false;
  beginSession();
});
$('soundButton').addEventListener('click', () => {
  soundOn = !soundOn;
  $('soundButton').innerHTML = `SUARA <b>${soundOn ? 'ON' : 'OFF'}</b>`;
  if (soundOn) getAudio();
});
$('restartButton').addEventListener('click', resetGame);
beginIntro();

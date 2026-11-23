const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_JeTRkkZb7p2ntdEAEhXS7Z48v4f6O7YuAL3ksUAGQDLcSwLIrNqZNLPJ1lcDCumr/exec';

const GDRIVE_LINKS = {
  // Catatan: Link Faspenkom sebelumnya berupa link Google Docs (/document/d/...),
  // sehingga sementara tetap menggunakan folder Faspenkom lama sampai diberi link Foldernya.
  faspenkom_guru:   'https://drive.google.com/drive/folders/1k_tXuFWLqsPhDtoE6td2LxaDQnECpdou?usp=sharing',
  faspenkom_tendik: 'https://drive.google.com/drive/folders/1k_tXuFWLqsPhDtoE6td2LxaDQnECpdou?usp=sharing',

  mitras:           'https://drive.google.com/drive/folders/1g1izeiKfzP53RvKM_5vnfEZwR6utX4E8?usp=sharing',

  ppmpv:            'https://drive.google.com/drive/folders/1uqPx45FUobIKBNUpwSXeE88mysn9PZFh?usp=sharing',

  kepegawaian:      'https://drive.google.com/drive/folders/11qJ38-ZkIK-M60DZkZwsOnpBzj-KmtBi?usp=sharing',

  bmn:              'https://drive.google.com/drive/folders/16n1SVUq3lhUtzSXC3c8tUPMv4Ytax-UY?usp=sharing',

  data_info:        'https://drive.google.com/drive/folders/1C8GqZVjtjYRbNJYXWg4DbFoM6NBTeoVT?usp=sharing',

  keuangan:         'https://drive.google.com/drive/folders/1dLk9wljkqk00H_u7ZP1J7uuKJ2WaXfNZ?usp=sharing',

  kerumahtanggaan:  'https://drive.google.com/drive/folders/13HtftlB-WB4A-IfozZOolEI8YqG3ZEWz?usp=sharing'
};

const FASPENKOM_FIELDS = [
  { id: 'nama_kegiatan', label: 'Nama Kegiatan selama tahun 2026', type: 'text', placeholder: 'Masukkan nama kegiatan...' },
  { id: 'deskripsi_kegiatan', label: 'Deskripsi Kegiatan', type: 'textarea', placeholder: 'Tuliskan deskripsi lengkap kegiatan...' },
  { id: 'target_pk', label: 'Target PK', type: 'text', placeholder: 'Tuliskan target PK...' },
  { id: 'realisasi', label: 'Realisasi Hingga November 2026', type: 'text', placeholder: 'Tuliskan realisasi hingga November 2026...' },
  { id: 'tgl_pelaksanaan', label: 'Tanggal Pelaksanaan', type: 'text', placeholder: 'Contoh: 12 - 16 Juni 2026' },
  { id: 'total_peserta', label: 'Total jumlah Peserta yang Hadir', type: 'text', placeholder: 'Contoh: 120 Orang' },
  { id: 'klasifikasi_predikat', label: 'Klasifikasi Predikat Peserta untuk setiap Kegiatan', type: 'textarea', placeholder: 'Tuliskan klasifikasi predikat peserta (Amat Baik, Baik, Cukup, dll)...' },
  { id: 'hambatan', label: 'Hambatan saat pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan hambatan yang dihadapi...' },
  { id: 'dampak', label: 'Dampak pasca pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan dampak nyata pasca pelaksanaan kegiatan...' },
  { id: 'strategi', label: 'Strategi Pelaksanaan', type: 'textarea', placeholder: 'Tuliskan strategi pelaksanaan kegiatan...' },
  { id: 'langkah_antisipasi', label: 'Langkah antisipasi yang dilakukan dalam rangka mengatasi hambatan dan permasalahan yang dihadapi dalam pencapaian target kinerja', type: 'textarea', placeholder: 'Tuliskan langkah antisipasi dan solusi...' },
  { id: 'dokumentasi', label: 'Dokumentasi Kegiatan', type: 'file' }
];

const MITRAS_FIELDS = [
  { id: 'nama_kegiatan', label: 'Nama Kegiatan selama tahun 2026', type: 'text', placeholder: 'Masukkan nama kegiatan...' },
  { id: 'deskripsi_kegiatan', label: 'Deskripsi Kegiatan', type: 'textarea', placeholder: 'Tuliskan deskripsi lengkap kegiatan...' },
  { id: 'target_pk', label: 'Target PK', type: 'text', placeholder: 'Tuliskan target PK...' },
  { id: 'realisasi', label: 'Realisasi Hingga November 2026', type: 'text', placeholder: 'Tuliskan realisasi hingga November 2026...' },
  { id: 'tgl_pelaksanaan', label: 'Tanggal Pelaksanaan', type: 'text', placeholder: 'Contoh: 10 - 14 Mei 2026' },
  { id: 'hambatan', label: 'Hambatan saat pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan hambatan yang dihadapi...' },
  { id: 'dampak', label: 'Dampak pasca pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan dampak nyata pasca pelaksanaan kegiatan...' },
  { id: 'strategi', label: 'Strategi Pelaksanaan', type: 'textarea', placeholder: 'Tuliskan strategi pelaksanaan kegiatan...' },
  { id: 'langkah_antisipasi', label: 'Langkah antisipasi yang dilakukan dalam rangka mengatasi hambatan dan permasalahan yang dihadapi dalam pencapaian target kinerja', type: 'textarea', placeholder: 'Tuliskan langkah antisipasi dan solusi...' },
  { id: 'dokumentasi', label: 'Dokumentasi Kegiatan', type: 'file' }
];

const PPMPV_FIELDS = [
  { id: 'nama_kegiatan', label: 'Nama Kegiatan selama tahun 2026', type: 'text', placeholder: 'Masukkan nama kegiatan...' },
  { id: 'deskripsi_kegiatan', label: 'Deskripsi Kegiatan', type: 'textarea', placeholder: 'Tuliskan deskripsi lengkap kegiatan...' },
  { id: 'target_pk', label: 'Target PK', type: 'text', placeholder: 'Tuliskan target PK...' },
  { id: 'realisasi', label: 'Realisasi Hingga November 2026', type: 'text', placeholder: 'Tuliskan realisasi hingga November 2026...' },
  { id: 'tgl_pelaksanaan', label: 'Tanggal Pelaksanaan', type: 'text', placeholder: 'Contoh: 2 - 6 Oktober 2026' },
  { id: 'hambatan', label: 'Hambatan saat pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan hambatan yang dihadapi...' },
  { id: 'dampak', label: 'Dampak pasca pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan dampak nyata pasca pelaksanaan kegiatan...' },
  { id: 'strategi', label: 'Strategi Pelaksanaan', type: 'textarea', placeholder: 'Tuliskan strategi pelaksanaan kegiatan...' },
  { id: 'langkah_antisipasi', label: 'Langkah antisipasi yang dilakukan dalam rangka mengatasi hambatan dan permasalahan yang dihadapi dalam pencapaian target kinerja', type: 'textarea', placeholder: 'Tuliskan langkah antisipasi dan solusi...' },
  { id: 'dokumentasi', label: 'Dokumentasi Kegiatan', type: 'file' }
];

const KEPEGAWAIAN_FIELDS = [
  { id: 'gambaran_umum', label: 'Gambaran Umum Organisasi', type: 'textarea', placeholder: 'Tuliskan profil singkat, tugas pokok, fungsi, dan struktur organisasi...' },
  { id: 'visi_misi', label: 'Visi dan Misi BBPPMPV BBL', type: 'textarea', placeholder: 'Tuliskan visi dan misi resmi BBPPMPV Bidang Bangunan dan Listrik...' },
  { id: 'jumlah_pegawai', label: 'Jumlah Pegawai (Mohon dirincikan)', type: 'pegawai_breakdown' },
  { id: 'nama_kegiatan', label: 'Nama Kegiatan selama tahun 2026', type: 'text', placeholder: 'Masukkan nama kegiatan...' },
  { id: 'deskripsi_kegiatan', label: 'Deskripsi Kegiatan', type: 'textarea', placeholder: 'Tuliskan deskripsi lengkap kegiatan...' },
  { id: 'realisasi', label: 'Realisasi Hingga November 2026', type: 'text', placeholder: 'Tuliskan realisasi hingga November 2026...' },
  { id: 'tgl_pelaksanaan', label: 'Tanggal Pelaksanaan', type: 'text', placeholder: 'Contoh: 1 - 5 Maret 2026' },
  { id: 'hambatan', label: 'Hambatan saat pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan hambatan yang dihadapi...' },
  { id: 'dampak', label: 'Dampak pasca pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan dampak nyata pasca pelaksanaan kegiatan...' },
  { id: 'strategi', label: 'Strategi Pelaksanaan', type: 'textarea', placeholder: 'Tuliskan strategi pelaksanaan kegiatan...' },
  { id: 'langkah_antisipasi', label: 'Langkah antisipasi yang dilakukan dalam rangka mengatasi hambatan dan permasalahan yang dihadapi dalam pencapaian target kinerja', type: 'textarea', placeholder: 'Tuliskan langkah antisipasi dan solusi...' },
  { id: 'dokumentasi', label: 'Dokumentasi Kegiatan', type: 'file' }
];

const BMN_FIELDS = [
  { id: 'nama_kegiatan', label: 'Nama Kegiatan selama tahun 2026', type: 'text', placeholder: 'Masukkan nama kegiatan...' },
  { id: 'deskripsi_kegiatan', label: 'Deskripsi Kegiatan', type: 'textarea', placeholder: 'Tuliskan deskripsi lengkap kegiatan...' },
  { id: 'target_pk', label: 'Target PK', type: 'text', placeholder: 'Tuliskan target PK...' },
  { id: 'realisasi', label: 'Realisasi Hingga November 2026', type: 'text', placeholder: 'Tuliskan realisasi hingga November 2026...' },
  { id: 'tgl_pelaksanaan', label: 'Tanggal Pelaksanaan', type: 'text', placeholder: 'Contoh: 8 - 12 Juli 2026' },
  { id: 'hambatan', label: 'Hambatan saat pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan hambatan yang dihadapi...' },
  { id: 'dampak', label: 'Dampak pasca pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan dampak nyata pasca pelaksanaan kegiatan...' },
  { id: 'strategi', label: 'Strategi Pelaksanaan', type: 'textarea', placeholder: 'Tuliskan strategi pelaksanaan kegiatan...' },
  { id: 'langkah_antisipasi', label: 'Langkah antisipasi yang dilakukan dalam rangka mengatasi hambatan dan permasalahan yang dihadapi dalam pencapaian target kinerja', type: 'textarea', placeholder: 'Tuliskan langkah antisipasi dan solusi...' },
  { id: 'dokumentasi', label: 'Dokumentasi Kegiatan', type: 'file' }
];

const DATA_INFO_FIELDS = [
  { id: 'data_guru_tendik', label: 'Data Guru dan Tendik', type: 'textarea', placeholder: 'Tuliskan rincian lengkap data guru dan tendik vokasi, sebaran wilayah, dan bidang keahlian...' },
  { id: 'nama_kegiatan', label: 'Nama Kegiatan selama tahun 2026', type: 'text', placeholder: 'Masukkan nama kegiatan...' },
  { id: 'deskripsi_kegiatan', label: 'Deskripsi Kegiatan', type: 'textarea', placeholder: 'Tuliskan deskripsi lengkap kegiatan...' },
  { id: 'realisasi', label: 'Realisasi Hingga November 2026', type: 'text', placeholder: 'Tuliskan realisasi hingga November 2026...' },
  { id: 'tgl_pelaksanaan', label: 'Tanggal Pelaksanaan', type: 'text', placeholder: 'Contoh: 15 - 19 September 2026' },
  { id: 'hambatan', label: 'Hambatan saat pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan hambatan yang dihadapi...' },
  { id: 'dampak', label: 'Dampak pasca pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan dampak nyata pasca pelaksanaan kegiatan...' },
  { id: 'strategi', label: 'Strategi Pelaksanaan', type: 'textarea', placeholder: 'Tuliskan strategi pelaksanaan kegiatan...' },
  { id: 'langkah_antisipasi', label: 'Langkah antisipasi yang dilakukan dalam rangka mengatasi hambatan dan permasalahan yang dihadapi dalam pencapaian target kinerja', type: 'textarea', placeholder: 'Tuliskan langkah antisipasi dan solusi...' },
  { id: 'dokumentasi', label: 'Dokumentasi Kegiatan', type: 'file' }
];

const KEUANGAN_FIELDS = [
  { id: 'capaian_anggaran', label: 'Penjelasan Rincian Capaian Anggaran', type: 'textarea', placeholder: 'Tuliskan rincian capaian realisasi anggaran tahun 2026...' },
  { id: 'efisiensi_anggaran', label: 'Penjelasan Efisiensi Anggaran', type: 'textarea', placeholder: 'Tuliskan penjelasan terkait efisiensi anggaran yang dilakukan...' },
  { id: 'revisi_pagu', label: 'Penjelasan Revisi Pagu', type: 'textarea', placeholder: 'Tuliskan penjelasan terkait revisi pagu anggaran...' },
  { id: 'sbkk', label: 'Penjelasan terkait SBKK', type: 'textarea', placeholder: 'Tuliskan penjelasan terkait Standar Biaya Keluaran Khusus (SBKK)...' },
  { id: 'pnbp', label: 'Penjelasan terkait PNBP', type: 'textarea', placeholder: 'Tuliskan penjelasan terkait Penerimaan Negara Bukan Pajak (PNBP)...' },
  { id: 'dokumentasi', label: 'Dokumentasi', type: 'file' }
];
const KERUMAHTANGGAAN_FIELDS = [
  { id: 'nama_kegiatan', label: 'Nama Kegiatan selama tahun 2026', type: 'text', placeholder: 'Masukkan nama kegiatan...' },
  { id: 'deskripsi_kegiatan', label: 'Deskripsi Kegiatan', type: 'textarea', placeholder: 'Tuliskan deskripsi lengkap kegiatan...' },
  { id: 'realisasi', label: 'Realisasi Hingga November 2026', type: 'text', placeholder: 'Tuliskan realisasi hingga November 2026...' },
  { id: 'tgl_pelaksanaan', label: 'Tanggal Pelaksanaan', type: 'text', placeholder: 'Contoh: 12 - 16 Agustus 2026' },
  { id: 'hambatan', label: 'Hambatan saat pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan hambatan yang dihadapi...' },
  { id: 'dampak', label: 'Dampak pasca pelaksanaan kegiatan', type: 'textarea', placeholder: 'Tuliskan dampak nyata pasca pelaksanaan kegiatan...' },
  { id: 'strategi', label: 'Strategi Pelaksanaan', type: 'textarea', placeholder: 'Tuliskan strategi pelaksanaan kegiatan...' },
  { id: 'langkah_antisipasi', label: 'Langkah antisipasi yang dilakukan dalam rangka mengatasi hambatan dan permasalahan yang dihadapi dalam pencapaian target kinerja', type: 'textarea', placeholder: 'Tuliskan langkah antisipasi dan solusi...' },
  { id: 'dokumentasi', label: 'Dokumentasi', type: 'file' }
];

const FORMS_CONFIG = {
  faspenkom_guru: {
    key: 'faspenkom_guru',
    parentTeam: 'faspenkom',
    parentTitle: 'Tim Kerja Faspenkom',
    title: 'FASPENKOM GURU SMK',
    subtitle: 'Instrumen Kinerja Fasilitasi Peningkatan Kompetensi Guru SMK Tahun 2026',
    fields: FASPENKOM_FIELDS
  },
  faspenkom_tendik: {
    key: 'faspenkom_tendik',
    parentTeam: 'faspenkom',
    parentTitle: 'Tim Kerja Faspenkom',
    title: 'FASPENKOM TENDIK',
    subtitle: 'Instrumen Kinerja Fasilitasi Peningkatan Kompetensi Tendik PKPLK Tahun 2026',
    fields: FASPENKOM_FIELDS
  },

  mitras: {
    key: 'mitras',
    parentTeam: 'mitras',
    parentTitle: 'Tim Kerja Mitras',
    title: 'MITRAS',
    subtitle: 'Instrumen Kinerja Kemitraan dan Penyelarasan (MITRAS) Tahun 2026',
    fields: MITRAS_FIELDS
  },

  ppmpv: {
    key: 'ppmpv',
    parentTeam: 'ppmpv',
    parentTitle: 'Tim Kerja PPMPV',
    title: 'PPMPV',
    subtitle: 'Instrumen Kinerja Pengembangan Penjaminan Mutu Pendidikan Vokasi Tahun 2026',
    fields: PPMPV_FIELDS
  },
  kepegawaian: {
    key: 'kepegawaian',
    parentTeam: 'kepegawaian',
    parentTitle: 'Kepegawaian & Tata Laksana',
    title: 'KEPEGAWAIAN DAN TATA LAKSANA',
    subtitle: 'Instrumen Kinerja Kepegawaian dan Tata Laksana Tahun 2026',
    fields: KEPEGAWAIAN_FIELDS
  },
  bmn: {
    key: 'bmn',
    parentTeam: 'bmn',
    parentTitle: 'BMN',
    title: 'BMN',
    subtitle: 'Instrumen Kinerja Pengelolaan Barang Milik Negara (BMN) Tahun 2026',
    fields: BMN_FIELDS
  },
  data_info: {
    key: 'data_info',
    parentTeam: 'data_info',
    parentTitle: 'Data, Informasi & Publikasi',
    title: 'DATA, INFORMASI & PUBLIKASI',
    subtitle: 'Instrumen Kinerja Pengelolaan Data, Informasi & Publikasi Tahun 2026',
    fields: DATA_INFO_FIELDS
  },

  kerumahtanggaan: {
    key: 'kerumahtanggaan',
    parentTeam: 'ppmpv',
    parentTitle: 'Tim Kerja PPMPV',
    title: 'KERUMAHTANGGAAN DAN KEHUMASAN',
    subtitle: 'Instrumen Kinerja Kerumahtanggaan dan Kehumasan Tahun 2026',
    fields: KERUMAHTANGGAAN_FIELDS
  },

  keuangan: {
    key: 'keuangan',
    parentTeam: 'keuangan',
    parentTitle: 'Keuangan',
    title: 'KEUANGAN',
    subtitle: 'Instrumen Kinerja Keuangan Tahun 2026',
    fields: KEUANGAN_FIELDS
  }
};

let currentActiveKey = 'faspenkom_guru';
let uploadedFilesMap = {};
const groupOpenState = {
  faspenkom: true
};

document.addEventListener('DOMContentLoaded', () => {
  try { localStorage.removeItem('bbl_submissions'); } catch (e) {}
  renderAllForms();

  Object.keys(FORMS_CONFIG).forEach(key => {
    loadFormDraft(key);
  });
  updateAllSidebarBadges();

  const savedPage = sessionStorage.getItem('bbl_active_page');
  const savedForm = sessionStorage.getItem('bbl_active_form');

  if (savedPage === 'info') {
    showPage('info');
  } else if (savedForm && FORMS_CONFIG[savedForm]) {
    switchForm(savedForm);
  } else {
    switchForm('faspenkom_guru');
  }
});



function saveFormDraft(formKey, isSilent = false) {
  const config = FORMS_CONFIG[formKey];
  if (!config) return;

  const rawValues = {};
  config.fields.forEach(field => {
    const fieldId = `${config.key}_${field.id}`;
    if (field.type === 'pegawai_breakdown') {
      rawValues.pns = document.getElementById(`${config.key}_pegawai_pns`)?.value || '';
      rawValues.pppk = document.getElementById(`${config.key}_pegawai_pppk`)?.value || '';
      rawValues.ppnpn = document.getElementById(`${config.key}_pegawai_ppnpn`)?.value || '';
      rawValues.uraian = document.getElementById(`${config.key}_pegawai_uraian`)?.value || '';
    } else if (field.type !== 'file') {
      const input = document.getElementById(fieldId);
      rawValues[field.id] = input ? input.value : '';
    }
  });

  const draftObj = {
    formKey,
    rawValues,
    savedAt: new Date().toLocaleString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    })
  };

  try {
    localStorage.setItem(`bbl_draft_${formKey}`, JSON.stringify(draftObj));
  } catch (e) {
    console.warn('Gagal menyimpan draft:', e);
  }

  updateFormStatusBar(formKey);
  updateAllSidebarBadges();

  if (!isSilent) {
    showToast(`💾 Draft isian "${config.title}" berhasil disimpan sementara!`, 'success');
  }
}


function handleSaveDraft(formKey) {
  saveFormDraft(formKey, false);
}

let autoSaveTimer = null;
function autoSaveDraft(formKey) {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    saveFormDraft(formKey, true);
  }, 1000);
}


function loadFormDraft(formKey) {
  const config = FORMS_CONFIG[formKey];
  if (!config) return;

  let draftObj = null;
  try {
    const saved = localStorage.getItem(`bbl_draft_${formKey}`);
    if (saved) draftObj = JSON.parse(saved);
  } catch (e) {
    draftObj = null;
  }

  if (draftObj && draftObj.rawValues) {
    const v = draftObj.rawValues;
    config.fields.forEach(field => {
      const fieldId = `${config.key}_${field.id}`;
      if (field.type === 'pegawai_breakdown') {
        const pnsEl = document.getElementById(`${config.key}_pegawai_pns`);
        const pppkEl = document.getElementById(`${config.key}_pegawai_pppk`);
        const ppnpnEl = document.getElementById(`${config.key}_pegawai_ppnpn`);
        const uraianEl = document.getElementById(`${config.key}_pegawai_uraian`);
        if (pnsEl && v.pns !== undefined) pnsEl.value = v.pns;
        if (pppkEl && v.pppk !== undefined) pppkEl.value = v.pppk;
        if (ppnpnEl && v.ppnpn !== undefined) ppnpnEl.value = v.ppnpn;
        if (uraianEl && v.uraian !== undefined) uraianEl.value = v.uraian;
        calcTotalPegawai(formKey);
      } else if (field.type !== 'file') {
        const input = document.getElementById(fieldId);
        if (input && v[field.id] !== undefined) {
          input.value = v[field.id];
        }
      }
    });
  }

  updateFormStatusBar(formKey);
}


function updateFormStatusBar(formKey) {
  const bar = document.getElementById(`status-bar-${formKey}`);
  const topStatus = document.getElementById(`top-status-${formKey}`);

  let draft = null;
  try {
    const saved = localStorage.getItem(`bbl_draft_${formKey}`);
    if (saved) draft = JSON.parse(saved);
  } catch (e) {}

  if (topStatus) {
    if (draft && draft.savedAt) {
      topStatus.className = 'gform-top-status draft';
      topStatus.innerHTML = `<span>💾</span> <span class="top-status-text">Draft Tersimpan Sementara (${draft.savedAt})</span>`;
    } else {
      topStatus.className = 'gform-top-status empty';
      topStatus.innerHTML = `<span>📝</span> <span class="top-status-text">Isian otomatis tersimpan aman di browser</span>`;
    }
  }

  if (bar) {
    if (draft && draft.savedAt) {
      bar.innerHTML = `
        <div class="status-indicator-badge draft">
          <span>💾</span> <strong>Draft Tersimpan Sementara</strong> &mdash; ${draft.savedAt}
        </div>
        <span style="font-size:11.5px; color:#0284c7; font-weight:500;">(Tersimpan di browser ini, otomatis termuat saat form dibuka)</span>
      `;
    } else {
      bar.innerHTML = `
        <div class="status-indicator-badge empty">
          <span>📝</span> <strong>Formulir Baru</strong> (Belum ada draft tersimpan)
        </div>
        <span style="font-size:11.5px; color:#64748b;">(Gunakan "Simpan Sementara" untuk mencicil pengisian)</span>
      `;
    }
  }
}


function updateAllSidebarBadges() {
}


function toggleTeamGroup(groupName) {
  const isCurrentlyOpen = !!groupOpenState[groupName];

  if (!isCurrentlyOpen) {
    groupOpenState[groupName] = true;
    const listEl = document.getElementById(`list-${groupName}`);
    const arrowEl = document.getElementById(`arrow-${groupName}`);
    if (listEl) listEl.classList.remove('collapsed');
    if (arrowEl) arrowEl.classList.add('expanded');

    const activeConfig = FORMS_CONFIG[currentActiveKey];
    if (!activeConfig || activeConfig.parentTeam !== groupName) {
      if (groupName === 'faspenkom') {
        switchForm('faspenkom_guru');
      }
    }
  } else {
    groupOpenState[groupName] = false;
    const listEl = document.getElementById(`list-${groupName}`);
    const arrowEl = document.getElementById(`arrow-${groupName}`);
    if (listEl) listEl.classList.add('collapsed');
    if (arrowEl) arrowEl.classList.remove('expanded');
  }
}


function showPage(pageId) {
  sessionStorage.setItem('bbl_active_page', pageId);

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.menu-section').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.subteam-list li').forEach(li => li.classList.remove('active'));
  document.querySelectorAll('.nav-team-header').forEach(h => h.classList.remove('active'));

  if (pageId === 'info') {
    document.getElementById('page-info').classList.add('active');
    document.getElementById('menu-info').classList.add('active');
  } else {
    document.getElementById('page-form').classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function switchForm(formKey) {
  if (!FORMS_CONFIG[formKey]) return;
  currentActiveKey = formKey;
  const config = FORMS_CONFIG[formKey];

  sessionStorage.setItem('bbl_active_page', 'form');
  sessionStorage.setItem('bbl_active_form', formKey);

  showPage('form');

  document.querySelectorAll('.nav-team-header').forEach(h => h.classList.remove('active'));
  document.querySelectorAll('.subteam-list li').forEach(li => li.classList.remove('active'));

  const activeParentHeader = document.getElementById(`header-${config.parentTeam}`);
  if (activeParentHeader) activeParentHeader.classList.add('active');

  if (config.parentTeam === 'faspenkom') {
    groupOpenState['faspenkom'] = true;
    const listEl = document.getElementById('list-faspenkom');
    const arrowEl = document.getElementById('arrow-faspenkom');
    if (listEl) listEl.classList.remove('collapsed');
    if (arrowEl) arrowEl.classList.add('expanded');

    const activeSubItem = document.querySelector(`.subteam-list li[data-form-key="${formKey}"]`);
    if (activeSubItem) activeSubItem.classList.add('active');
  }

  document.querySelectorAll('.form-team-section').forEach(sec => {
    sec.style.display = 'none';
  });
  const activeSec = document.getElementById(`form-section-${formKey}`);
  if (activeSec) {
    activeSec.style.display = 'block';
  }

  loadFormDraft(formKey);
  updateFormStatusBar(formKey);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function calcTotalPegawai(formKey) {
  const pns = parseInt(document.getElementById(`${formKey}_pegawai_pns`)?.value || '0', 10) || 0;
  const pppk = parseInt(document.getElementById(`${formKey}_pegawai_pppk`)?.value || '0', 10) || 0;
  const ppnpn = parseInt(document.getElementById(`${formKey}_pegawai_ppnpn`)?.value || '0', 10) || 0;
  const total = pns + pppk + ppnpn;

  const totalBadge = document.getElementById(`${formKey}_total_pegawai_badge`);
  if (totalBadge) {
    totalBadge.textContent = `${total} Orang`;
  }
}


function renderAllForms() {
  const container = document.getElementById('forms-dynamic-wrapper');
  container.innerHTML = '';

  Object.values(FORMS_CONFIG).forEach(config => {
    const formSection = document.createElement('div');
    formSection.className = 'form-team-section';
    formSection.id = `form-section-${config.key}`;
    if (config.key !== currentActiveKey) {
      formSection.style.display = 'none';
    }

    let headerHtml = `
      <div class="gform-header-card">
        <div class="gform-badge-parent">${config.parentTitle}</div>
        <h1 class="gform-title">${config.title}</h1>
        <p class="gform-desc">${config.subtitle}</p>

        <!-- Bar Simpan Sementara di Bagian Atas -->
        <div class="gform-top-bar">
          <div class="gform-top-status" id="top-status-${config.key}">
            <span>💾</span> <span class="top-status-text">Isian otomatis tersimpan aman di browser</span>
          </div>
          <button type="button" class="btn-top-save" onclick="handleSaveDraft('${config.key}')" title="Simpan isian formulir saat ini">
            <span>💾</span> Simpan Sementara
          </button>
        </div>

        <div class="gform-required-hint">
          <span class="required-asterisk">*</span> Menunjukkan pertanyaan yang wajib diisi
        </div>
      </div>
    `;

    let fieldsHtml = '<div class="form-container">';
    fieldsHtml += headerHtml;

    config.fields.forEach(field => {
      const fieldId = `${config.key}_${field.id}`;

      if (field.type === 'pegawai_breakdown') {
        fieldsHtml += `
          <div class="question-card" id="card-${fieldId}">
            <label class="question-label">
              <span>${field.label}</span>
              <span class="required-asterisk">*</span>
            </label>
            
            <div class="breakdown-box">
              <div class="breakdown-subtitle">&#128101; Masukkan Jumlah Pegawai Berdasarkan Status:</div>
              
              <div class="breakdown-grid">
                <div class="breakdown-item">
                  <label for="${config.key}_pegawai_pns">PNS (Pegawai Negeri Sipil)</label>
                  <input type="number" min="0" class="breakdown-input" id="${config.key}_pegawai_pns" 
                         placeholder="0" oninput="calcTotalPegawai('${config.key}'); clearFieldError('${fieldId}')" />
                </div>
                
                <div class="breakdown-item">
                  <label for="${config.key}_pegawai_pppk">PPPK</label>
                  <input type="number" min="0" class="breakdown-input" id="${config.key}_pegawai_pppk" 
                         placeholder="0" oninput="calcTotalPegawai('${config.key}'); clearFieldError('${fieldId}')" />
                </div>
                
                <div class="breakdown-item">
                  <label for="${config.key}_pegawai_ppnpn">PPNPN / Non-ASN</label>
                  <input type="number" min="0" class="breakdown-input" id="${config.key}_pegawai_ppnpn" 
                         placeholder="0" oninput="calcTotalPegawai('${config.key}'); clearFieldError('${fieldId}')" />
                </div>
              </div>

              <div class="total-pegawai-wrap">
                <span class="total-pegawai-label">Total Keseluruhan Pegawai:</span>
                <span class="total-pegawai-badge" id="${config.key}_total_pegawai_badge">0 Orang</span>
              </div>

              <div style="margin-top: 10px;">
                <label style="font-size: 12px; font-weight: 600; color: #475569; display:block; margin-bottom: 5px;">
                  Uraian / Rincian Tambahan (Jabatan Fungsional, Golongan, atau Sebaran Unit):
                </label>
                <textarea class="gform-input" id="${config.key}_pegawai_uraian" 
                          placeholder="Tuliskan rincian tambahan seperti jumlah Widyaiswara, Pengembang Teknologi Pembelajaran, Jabatan Pelaksana, dll..."></textarea>
              </div>
            </div>

            <div class="error-message" id="err-${fieldId}">
              <span>&#9888;</span> Mohon isi minimal salah satu jumlah pegawai atau rinciannya
            </div>
          </div>
        `;
      } else if (field.type === 'file') {
        fieldsHtml += `
          <div class="question-card" id="card-${fieldId}">
            <label class="question-label" for="${fieldId}">
              <span>${field.label}</span>
              <span class="required-asterisk">*</span>
            </label>
            <div class="upload-dropzone" id="dropzone-${fieldId}" 
                 onclick="document.getElementById('${fieldId}').click()">
              <svg class="upload-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <div class="upload-text-main">Unggah File / Foto Dokumentasi</div>
              <div class="upload-text-sub">Tarik & letakkan file di sini atau klik untuk memilih file (Foto, PDF, DOCX, ZIP)</div>
              <button type="button" class="btn-browse">Pilih File</button>
              <input type="file" id="${fieldId}" class="file-input-hidden" multiple 
                     onchange="handleFileSelect('${config.key}', '${fieldId}', this.files)" />
            </div>
            <div class="uploaded-files-list" id="filelist-${fieldId}"></div>
            <div class="error-message" id="err-${fieldId}">
              <span>&#9888;</span> Pertanyaan ini wajib diisi (Lampirkan minimal 1 file dokumentasi)
            </div>
          </div>
        `;
      } else if (field.type === 'textarea') {
        fieldsHtml += `
          <div class="question-card" id="card-${fieldId}">
            <label class="question-label" for="${fieldId}">
              <span>${field.label}</span>
              <span class="required-asterisk">*</span>
            </label>
            <div class="gform-input-wrap">
              <textarea class="gform-input" id="${fieldId}" 
                        placeholder="${field.placeholder}" 
                        oninput="clearFieldError('${fieldId}')"></textarea>
            </div>
            <div class="error-message" id="err-${fieldId}">
              <span>&#9888;</span> Pertanyaan ini wajib diisi
            </div>
          </div>
        `;
      } else {
        fieldsHtml += `
          <div class="question-card" id="card-${fieldId}">
            <label class="question-label" for="${fieldId}">
              <span>${field.label}</span>
              <span class="required-asterisk">*</span>
            </label>
            <div class="gform-input-wrap">
              <input type="text" class="gform-input" id="${fieldId}" 
                     placeholder="${field.placeholder}" 
                     oninput="clearFieldError('${fieldId}')" />
            </div>
            <div class="error-message" id="err-${fieldId}">
              <span>&#9888;</span> Pertanyaan ini wajib diisi
            </div>
          </div>
        `;
      }
    });

    fieldsHtml += `
      <div class="form-actions-card">

        <!-- Status Bar Penyimpanan Sementara / Submit -->
        <div class="form-status-bar" id="status-bar-${config.key}">
          <!-- Status terupdate otomatis -->
        </div>

        <div class="btn-group-actions">
          <button type="button" class="btn-save-draft" onclick="handleSaveDraft('${config.key}')" title="Simpan data ke perangkat sementara agar tidak hilang">
            <span>💾</span> Simpan Sementara
          </button>
          <button type="button" class="btn-preview-main" onclick="handleReview('${config.key}')" title="Periksa kelengkapan seluruh isian formulir">
            <span>👁</span> Review Data
          </button>
          <button type="button" class="btn-submit-main" onclick="handleSubmitOnly('${config.key}')">
            <span>&#10003;</span> Submit
          </button>
        </div>

        <button type="button" class="btn-clear" onclick="clearForm('${config.key}')">
          Kosongkan formulir
        </button>
      </div>
    `;

    fieldsHtml += '</div>';
    formSection.innerHTML = fieldsHtml;
    container.appendChild(formSection);

    setupDropzoneEvents(config.key, `${config.key}_dokumentasi`);
  });
}


function setupDropzoneEvents(formKey, fieldId) {
  setTimeout(() => {
    const dropzone = document.getElementById(`dropzone-${fieldId}`);
    if (!dropzone) return;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.add('dragover'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.remove('dragover'), false);
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFileSelect(formKey, fieldId, files);
    }, false);
  }, 100);
}


function handleFileSelect(formKey, fieldId, files) {
  if (!files || files.length === 0) return;

  if (!uploadedFilesMap[formKey]) {
    uploadedFilesMap[formKey] = [];
  }

  Array.from(files).forEach(file => {
    const exists = uploadedFilesMap[formKey].some(f => f.name === file.name && f.size === file.size);
    if (!exists) {
      uploadedFilesMap[formKey].push(file);
    }
  });

  renderUploadedFilesList(formKey, fieldId);
  clearFieldError(fieldId);
}


function renderUploadedFilesList(formKey, fieldId) {
  const listContainer = document.getElementById(`filelist-${fieldId}`);
  if (!listContainer) return;

  const files = uploadedFilesMap[formKey] || [];
  listContainer.innerHTML = '';

  files.forEach((file, index) => {
    const item = document.createElement('div');
    item.className = 'uploaded-file-item';
    
    const sizeStr = file.size > 1024 * 1024 
      ? (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      : (file.size / 1024).toFixed(1) + ' KB';

    item.innerHTML = `
      <div class="file-info">
        <span class="file-name" title="${file.name}">${file.name}</span>
        <span class="file-size">(${sizeStr})</span>
      </div>
      <button type="button" class="btn-remove-file" title="Hapus file" 
              onclick="removeUploadedFile('${formKey}', '${fieldId}', ${index})">&times;</button>
    `;
    listContainer.appendChild(item);
  });
}


function removeUploadedFile(formKey, fieldId, index) {
  if (uploadedFilesMap[formKey]) {
    uploadedFilesMap[formKey].splice(index, 1);
    renderUploadedFilesList(formKey, fieldId);
  }
}


function clearFieldError(fieldId) {
  const card = document.getElementById(`card-${fieldId}`);
  if (card) {
    card.classList.remove('has-error');
  }
}


function validateForm(formKey) {
  const config = FORMS_CONFIG[formKey];
  if (!config) return { isValid: false, formData: {} };

  let isValid = true;
  let firstErrorCard = null;
  const formData = {};

  config.fields.forEach(field => {
    const fieldId = `${config.key}_${field.id}`;
    const card = document.getElementById(`card-${fieldId}`);

    if (field.type === 'pegawai_breakdown') {
      const pns = document.getElementById(`${config.key}_pegawai_pns`)?.value.trim() || '0';
      const pppk = document.getElementById(`${config.key}_pegawai_pppk`)?.value.trim() || '0';
      const ppnpn = document.getElementById(`${config.key}_pegawai_ppnpn`)?.value.trim() || '0';
      const uraian = document.getElementById(`${config.key}_pegawai_uraian`)?.value.trim() || '';
      const total = (parseInt(pns, 10) || 0) + (parseInt(pppk, 10) || 0) + (parseInt(ppnpn, 10) || 0);

      if (total === 0 && !uraian) {
        isValid = false;
        if (card) card.classList.add('has-error');
        if (!firstErrorCard) firstErrorCard = card;
      } else {
        if (card) card.classList.remove('has-error');
        let rincianStr = `Total: ${total} Orang\n• PNS: ${pns} Orang\n• PPPK: ${pppk} Orang\n• PPNPN/Non-ASN: ${ppnpn} Orang`;
        if (uraian) {
          rincianStr += `\n\nUraian Rincian:\n${uraian}`;
        }
        formData[field.label] = rincianStr;
      }
    } else if (field.type === 'file') {
      const files = uploadedFilesMap[formKey] || [];
      if (files.length === 0) {
        isValid = false;
        if (card) card.classList.add('has-error');
        if (!firstErrorCard) firstErrorCard = card;
      } else {
        if (card) card.classList.remove('has-error');
        formData[field.label] = files.map(f => f.name).join(', ');
      }
    } else {
      const input = document.getElementById(fieldId);
      const val = input ? input.value.trim() : '';

      if (!val) {
        isValid = false;
        if (card) card.classList.add('has-error');
        if (!firstErrorCard) firstErrorCard = card;
      } else {
        if (card) card.classList.remove('has-error');
        formData[field.label] = val;
      }
    }
  });

  return { isValid, firstErrorCard, formData };
}


function collectFormData(formKey) {
  const config = FORMS_CONFIG[formKey];
  if (!config) return {};

  const formData = {};
  config.fields.forEach(field => {
    const fieldId = `${config.key}_${field.id}`;

    if (field.type === 'pegawai_breakdown') {
      const pns = document.getElementById(`${config.key}_pegawai_pns`)?.value.trim() || '0';
      const pppk = document.getElementById(`${config.key}_pegawai_pppk`)?.value.trim() || '0';
      const ppnpn = document.getElementById(`${config.key}_pegawai_ppnpn`)?.value.trim() || '0';
      const uraian = document.getElementById(`${config.key}_pegawai_uraian`)?.value.trim() || '';
      const total = (parseInt(pns, 10) || 0) + (parseInt(pppk, 10) || 0) + (parseInt(ppnpn, 10) || 0);

      let rincianStr = `Total: ${total} Orang\n• PNS: ${pns} Orang\n• PPPK: ${pppk} Orang\n• PPNPN/Non-ASN: ${ppnpn} Orang`;
      if (uraian) {
        rincianStr += `\n\nUraian Rincian Tambahan:\n${uraian}`;
      }
      formData[field.label] = rincianStr;
    } else if (field.type === 'file') {
      const files = uploadedFilesMap[formKey] || [];
      formData[field.label] = files.length > 0 ? files.map(f => f.name).join(', ') : '(Tidak ada file dilampirkan)';
      formData[`__files__${field.label}`] = uploadedFilesMap[formKey] || [];
    } else {
      const input = document.getElementById(fieldId);
      formData[field.label] = input && input.value.trim() ? input.value.trim() : '(Belum diisi)';
    }
  });

  return formData;
}


const lastSubmittedCache = {};


function isImageFile(file) {
  if (!file) return false;
  if (file.type && file.type.startsWith('image/')) return true;
  return /\.(png|jpe?g|gif|webp|bmp|jfif)$/i.test(file.name || '');
}

let currentReviewFormKey = null;


function openSubmitModal(formKey) {
  const config = FORMS_CONFIG[formKey];
  const modal = document.getElementById('submit-success-modal');
  const descEl = document.getElementById('modal-submit-desc');

  if (descEl && config) {
    descEl.innerHTML = `Laporan kinerja untuk <strong>${escapeXml(config.title)}</strong> telah berhasil disubmit. Formulir telah dikosongkan kembali seperti baru untuk pengisian berikutnya.`;
  }

  const btnWord = document.getElementById('modal-btn-word');
  const btnPdf = document.getElementById('modal-btn-pdf');
  const btnNew = document.getElementById('modal-btn-new');

  if (btnWord) btnWord.onclick = () => handleDownloadWordOnly(formKey);
  if (btnPdf) btnPdf.onclick = () => handleDownloadPdfOnly(formKey);
  if (btnNew) {
    btnNew.onclick = () => {
      closeSubmitModal();
    };
  }

  if (modal) modal.style.display = 'flex';
}


function closeSubmitModal() {
  const modal = document.getElementById('submit-success-modal');
  if (modal) modal.style.display = 'none';
}


function handleModalOverlayClick(e) {
  if (e.target && e.target.id === 'submit-success-modal') {
    closeSubmitModal();
  }
}



function handleReview(formKey) {
  currentReviewFormKey = formKey;
  const config = FORMS_CONFIG[formKey];
  if (!config) return;

  saveFormDraft(formKey, true);

  const formData = collectFormData(formKey);
  const modal = document.getElementById('preview-modal');
  const parentEl = document.getElementById('preview-modal-parent');
  const titleEl = document.getElementById('preview-modal-title');
  const subtitleEl = document.getElementById('preview-modal-subtitle');
  const summaryEl = document.getElementById('preview-modal-summary');
  const contentEl = document.getElementById('preview-content');

  if (parentEl) parentEl.textContent = config.parentTitle;
  if (titleEl) titleEl.textContent = `Review: ${config.title}`;
  if (subtitleEl) subtitleEl.textContent = config.subtitle;

  let filledCount = 0;
  const totalCount = config.fields.length;

  let rowsHtml = '';
  config.fields.forEach((field, idx) => {
    const val = formData[field.label];
    const isFile = field.type === 'file';
    const isEmpty = !val || val === '(Belum diisi)' || val === '(Tidak ada file dilampirkan)';

    if (!isEmpty) {
      filledCount++;
    }

    let valDisplay = '';
    if (isEmpty) {
      valDisplay = '<span class="review-empty-tag">⚠️ Belum diisi</span>';
    } else if (isFile) {
      const files = uploadedFilesMap[formKey] || [];
      const cachedImgs = (lastSubmittedCache[formKey] && lastSubmittedCache[formKey].images) ? lastSubmittedCache[formKey].images : [];

      if (files.length > 0) {
        let imgHtml = '';
        let fileTagsHtml = '';
        files.forEach(f => {
          if (isImageFile(f)) {
            let src = '';
            if (f.dataUrl) {
              src = f.dataUrl;
            } else {
              try { src = URL.createObjectURL(f); } catch (e) {}
            }
            if (src) {
              imgHtml += `
                <div class="review-img-item">
                  <img src="${src}" class="review-img-thumb" alt="${escapeXml(f.name)}" />
                  <span class="review-img-caption" title="${escapeXml(f.name)}">${escapeXml(f.name)}</span>
                </div>
              `;
            }
          } else {
            fileTagsHtml += `<span class="review-files-tag">📎 ${escapeXml(f.name)}</span> `;
          }
        });

        valDisplay = '';
        if (imgHtml) {
          valDisplay += `<div class="review-img-grid">${imgHtml}</div>`;
        }
        if (fileTagsHtml) {
          valDisplay += `<div style="margin-top:6px;">${fileTagsHtml}</div>`;
        }
        if (!valDisplay) {
          valDisplay = `<strong>${escapeXml(val)}</strong>`;
        }
      } else if (cachedImgs.length > 0) {
        let imgHtml = '';
        cachedImgs.forEach(img => {
          imgHtml += `
            <div class="review-img-item">
              <img src="${img.dataUrl}" class="review-img-thumb" alt="${escapeXml(img.name)}" />
              <span class="review-img-caption" title="${escapeXml(img.name)}">${escapeXml(img.name)}</span>
            </div>
          `;
        });
        valDisplay = `<div class="review-img-grid">${imgHtml}</div>`;
      } else {
        valDisplay = `<strong>${escapeXml(val)}</strong>`;
      }
    } else {
      valDisplay = nl2br(val);
    }

    rowsHtml += `
      <tr>
        <td class="review-col-no">${idx + 1}</td>
        <td class="review-col-label">${escapeXml(field.label)}</td>
        <td class="review-col-val">${valDisplay}</td>
      </tr>
    `;
  });

  const isComplete = (filledCount === totalCount);
  if (summaryEl) {
    summaryEl.className = isComplete ? 'review-summary-pill complete' : 'review-summary-pill incomplete';
    summaryEl.innerHTML = isComplete
      ? `<span>✅ Seluruh ${totalCount} instrumen telah terisi lengkap</span>`
      : `<span>⚠️ ${filledCount} dari ${totalCount} instrumen terisi (${totalCount - filledCount} belum diisi)</span>`;
  }

  if (contentEl) {
    contentEl.innerHTML = `
      <table class="review-table">
        <thead>
          <tr>
            <th class="review-col-no">No</th>
            <th class="review-col-label">Instrumen Pertanyaan</th>
            <th class="review-col-val">Keterangan / Hasil Isian</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
  }

  if (modal) modal.style.display = 'flex';
}

function handleDownloadWordFromReview() {
  if (currentReviewFormKey) {
    handleDownloadWordOnly(currentReviewFormKey);
  }
}

function handleSubmitFromReview() {
  if (currentReviewFormKey) {
    closePreviewModal();
    handleSubmitOnly(currentReviewFormKey);
  }
}

function closePreviewModal() {
  const modal = document.getElementById('preview-modal');
  if (modal) modal.style.display = 'none';
}

function handlePreviewOverlayClick(e) {
  if (e.target && e.target.id === 'preview-modal') {
    closePreviewModal();
  }
}


function clearFormSilent(formKey) {
  const config = FORMS_CONFIG[formKey];
  if (!config) return;

  const sec = document.getElementById(`form-section-${formKey}`);
  if (sec) {
    sec.querySelectorAll('input:not([type="button"]):not([type="submit"]), textarea').forEach(el => {
      el.value = '';
    });
    sec.querySelectorAll('.has-error').forEach(card => {
      card.classList.remove('has-error');
    });
  }

  const totalBadge = document.getElementById(`${config.key}_total_pegawai_badge`);
  if (totalBadge) totalBadge.textContent = '0 Orang';

  uploadedFilesMap[formKey] = [];
  config.fields.forEach(field => {
    if (field.type === 'file') {
      const fileListEl = document.getElementById(`filelist-${config.key}_${field.id}`);
      if (fileListEl) fileListEl.innerHTML = '';
    }
    clearFieldError(`${config.key}_${field.id}`);
  });
}


function compressImage(file, maxWidth = 900, maxHeight = 900, quality = 0.72) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      const rawDataUrl = e.target.result;
      if (!isImageFile(file)) {
        resolve({ name: file.name, dataUrl: rawDataUrl, type: file.type || 'application/octet-stream' });
        return;
      }
      const img = new Image();
      img.onload = () => {
        try {
          let width = img.width;
          let height = img.height;
          if (width > maxWidth || height > maxHeight) {
            if (width > height) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve({ name: file.name, dataUrl: compressedDataUrl, type: 'image/jpeg' });
        } catch (err) {
          resolve({ name: file.name, dataUrl: rawDataUrl, type: file.type || 'image/png' });
        }
      };
      img.onerror = () => resolve({ name: file.name, dataUrl: rawDataUrl, type: file.type || 'image/png' });
      img.src = rawDataUrl;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}


function extractDriveFolderId(url) {
  if (!url) return '';
  const match = url.match(/[-\w]{25,}/);
  return match ? match[0] : '';
}

function prepareFileForUpload(file) {
  return compressImage(file);
}

function uploadToGoogleDriveViaScript(formKey, fileName, wordContent, uploadedFiles = [], formData = {}) {
  if (!GOOGLE_SCRIPT_URL) return;

  const config = FORMS_CONFIG[formKey] || {};
  const folderId = extractDriveFolderId(GDRIVE_LINKS[formKey] || '');

  // Bersihkan properti __files__ dari formData agar payload JSON ramping dan bersih
  const cleanFormData = {};
  Object.keys(formData).forEach(k => {
    if (!k.startsWith('__files__')) {
      cleanFormData[k] = formData[k];
    }
  });

  const payload = JSON.stringify({
    formKey: formKey,
    title: config.title || formKey,
    parentTitle: config.parentTitle || 'BBPPMPV BBL',
    folderId: folderId,
    fileName: fileName,
    formData: cleanFormData,
    files: uploadedFiles || []
  });

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: payload
  })
  .then(() => {
    showToast('✔ Laporan & lampiran berhasil dikirim ke Google Drive!', 'success');
  })
  .catch(err => {
    console.warn('Gagal upload ke Google Drive:', err);
    showToast('⚠️ Gagal mengirim ke Google Drive, periksa koneksi internet.', 'error');
  });
}

function handleSubmitOnly(formKey) {
  const { isValid, firstErrorCard } = validateForm(formKey);

  if (!isValid) {
    showToast('Harap lengkapi semua isian yang wajib diisi!', 'error');
    if (firstErrorCard) {
      firstErrorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  const config = FORMS_CONFIG[formKey];
  const formData = collectFormData(formKey);
  const rawFiles = uploadedFilesMap[formKey] || [];

  const proceedSubmit = (preparedFiles) => {
    const embeddedImages = preparedFiles.filter(f => isImageFile(f));
    lastSubmittedCache[formKey] = { formData, images: embeddedImages };

    const wordContent = buildWordContent(config, formData, embeddedImages);

    if (typeof GOOGLE_SCRIPT_URL !== 'undefined' && GOOGLE_SCRIPT_URL) {
      const docFileName = `Laporan_Kinerja_${config.title.replace(/[\s,&]+/g, '_')}_2026.doc`;
      uploadToGoogleDriveViaScript(formKey, docFileName, wordContent, preparedFiles, formData);
    }

    clearFormSilent(formKey);
    try {
      localStorage.removeItem(`bbl_draft_${formKey}`);
    } catch (e) {}

    updateFormStatusBar(formKey);

    openSubmitModal(formKey);
    showToast(`✔ Laporan ${config.title} berhasil disubmit & formulir telah dikosongkan!`, 'success');
  };

  if (rawFiles.length === 0) {
    proceedSubmit([]);
    return;
  }

  Promise.all(rawFiles.map(file => prepareFileForUpload(file)))
    .then(files => proceedSubmit(files.filter(Boolean)));
}


function getDownloadData(formKey) {
  const config = FORMS_CONFIG[formKey];

  let hasCurrentData = false;
  for (const field of config.fields) {
    if (field.type === 'file') {
      if ((uploadedFilesMap[formKey] || []).length > 0) { hasCurrentData = true; break; }
    } else if (field.type !== 'pegawai_breakdown') {
      const el = document.getElementById(`${config.key}_${field.id}`);
      if (el && el.value.trim()) { hasCurrentData = true; break; }
    } else {
      const pns = document.getElementById(`${config.key}_pegawai_pns`);
      if (pns && pns.value.trim()) { hasCurrentData = true; break; }
    }
  }

  if (hasCurrentData) {
    return { formData: collectFormData(formKey), imageFiles: uploadedFilesMap[formKey] || [], fromCache: false };
  }

  if (lastSubmittedCache[formKey]) {
    return { formData: lastSubmittedCache[formKey].formData, imageFiles: null, images: lastSubmittedCache[formKey].images, fromCache: true };
  }

  return { formData: collectFormData(formKey), imageFiles: [], fromCache: false };
}


function handleDownloadWordOnly(formKey) {
  const config = FORMS_CONFIG[formKey];
  if (!config) return;

  const { formData, imageFiles, images: cachedImages, fromCache } = getDownloadData(formKey);

  if (fromCache) {
    generateAndDownloadWord(config, formData, cachedImages || []);
    showToast('✔ Dokumen Word (.doc) berhasil diunduh!', 'success');
    return;
  }

  if (!imageFiles || imageFiles.length === 0) {
    generateAndDownloadWord(config, formData, []);
    showToast('✔ Dokumen Word (.doc) berhasil diunduh!', 'success');
    return;
  }

  const imagePromises = imageFiles.map(file => new Promise(resolve => {
    if (!isImageFile(file)) { resolve(null); return; }
    const reader = new FileReader();
    reader.onload = e => resolve({ name: file.name, dataUrl: e.target.result, type: file.type });
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  }));

  Promise.all(imagePromises).then(images => {
    generateAndDownloadWord(config, formData, images.filter(Boolean));
    showToast('✔ Dokumen Word (.doc) berhasil diunduh!', 'success');
  });
}


function handleDownloadPdfOnly(formKey) {
  const config = FORMS_CONFIG[formKey];
  if (!config) return;

  const { formData, imageFiles, images: cachedImages, fromCache } = getDownloadData(formKey);

  if (fromCache) {
    generateAndPrintPdf(config, formData, cachedImages || []);
    return;
  }

  if (!imageFiles || imageFiles.length === 0) {
    generateAndPrintPdf(config, formData, []);
    return;
  }

  const imagePromises = imageFiles.map(file => new Promise(resolve => {
    if (!isImageFile(file)) { resolve(null); return; }
    const reader = new FileReader();
    reader.onload = e => resolve({ name: file.name, dataUrl: e.target.result });
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  }));

  Promise.all(imagePromises).then(images => {
    generateAndPrintPdf(config, formData, images.filter(Boolean));
  });
}


function clearForm(formKey) {
  if (!confirm('Apakah Anda yakin ingin mengosongkan seluruh isian formulir ini?')) {
    return;
  }

  const config = FORMS_CONFIG[formKey];
  if (!config) return;

  clearFormSilent(formKey);
  showToast('Formulir telah dikosongkan.', 'success');
}


function escapeXml(unsafe) {
  return (unsafe || '').toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function nl2br(text) {
  return escapeXml(text).replace(/\n/g, '<br/>');
}


function buildWordContent(config, formData, embeddedImages = []) {
  const tanggalHariIni = new Date().toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  let rowsHtml = '';
  config.fields.forEach(field => {
    const val = formData[field.label] || '-';

    if (field.type === 'file') {
      rowsHtml += `
        <tr>
          <td class="col-label" width="30%">${escapeXml(field.label)}</td>
          <td class="col-val" width="70%">${nl2br(val)}</td>
        </tr>`;
      if (embeddedImages.length > 0) {
        let imgHtml = '';
        embeddedImages.forEach(img => {
          imgHtml += `<img src="${img.dataUrl}" alt="${escapeXml(img.name || 'Foto')}" width="150"
            style="width:150px;max-width:150px;height:auto;margin:4px 6px 4px 0;border:1px solid #bbb;display:inline-block;vertical-align:top;" />`;
        });
        rowsHtml += `
        <tr>
          <td class="col-label" width="30%">Foto Dokumentasi</td>
          <td class="col-val" width="70%">${imgHtml}</td>
        </tr>`;
      }
    } else {
      rowsHtml += `
        <tr>
          <td class="col-label" width="30%">${escapeXml(field.label)}</td>
          <td class="col-val" width="70%">${nl2br(val)}</td>
        </tr>`;
    }
  });

  return `<html xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="ProgId" content="Word.Document">
<meta name="Generator" content="Microsoft Word 15">
<title>Laporan Kinerja - ${escapeXml(config.title)}</title>
<!--[if gte mso 9]>
<xml>
 <w:WordDocument>
  <w:View>Print</w:View>
  <w:Zoom>100</w:Zoom>
  <w:DoNotOptimizeForBrowser/>
 </w:WordDocument>
</xml>
<![endif]-->
<style>
  @page Section1 { size: 21.0cm 29.7cm; margin: 2.0cm 2.0cm 2.0cm 2.0cm; }
  div.Section1 { page: Section1; }
  body { font-family: Arial, sans-serif; font-size: 11pt; color: #111; }
  .hdr-title { text-align: center; font-size: 14pt; font-weight: bold; text-transform: uppercase; color: #15325b; margin-bottom: 2px; }
  .hdr-sub { text-align: center; font-size: 10.5pt; color: #444; margin-bottom: 12px; }
  .divider { border: none; border-top: 2px solid #1b3f7a; margin: 10px 0 18px 0; }
  table.meta { width: 100%; border-collapse: collapse; margin-bottom: 14px; font-size: 10.5pt; }
  table.meta td { padding: 3px 6px; vertical-align: top; }
  table.data { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 10pt; margin-top: 6px; }
  table.data th { background-color: #1b3f7a; color: #ffffff; padding: 8px 10px; border: 1px solid #15325b; text-align: left; font-weight: bold; }
  .col-label { width: 30%; padding: 8px 10px; font-weight: bold; background-color: #f5f8fc; border: 1px solid #c2d4ea; vertical-align: top; word-break: break-word; white-space: normal; }
  .col-val { width: 70%; padding: 8px 10px; border: 1px solid #c2d4ea; vertical-align: top; line-height: 1.55; word-break: break-word; white-space: normal; }
  .foot { margin-top: 36px; font-size: 9pt; color: #777; text-align: center; font-style: italic; border-top: 1px solid #ddd; padding-top: 8px; }
</style>
</head>
<body>
<div class="Section1">
<div class="hdr-title">LAPORAN CAPAIAN INDIKATOR KINERJA</div>
<div class="hdr-sub">BBPPMPV BIDANG BANGUNAN DAN LISTRIK &mdash; TAHUN 2026</div>
<hr class="divider"/>
<table class="meta" width="100%">
  <tr><td style="width:160px;"><strong>Tim Kerja</strong></td><td>: ${escapeXml(config.parentTitle)}</td></tr>
  <tr><td><strong>Bagian / Sub-Tim</strong></td><td>: ${escapeXml(config.title)}</td></tr>
  <tr><td><strong>Tanggal Pengisian</strong></td><td>: ${tanggalHariIni}</td></tr>
</table>
<table class="data" width="100%" border="1" cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;table-layout:fixed;">
  <colgroup><col width="220" style="width:30%;"/><col width="500" style="width:70%;"/></colgroup>
  <thead>
    <tr>
      <th width="30%" class="col-label" style="width:30%;color:#ffffff;background-color:#1b3f7a;border:1px solid #15325b;">Instrumen Pertanyaan</th>
      <th width="70%" class="col-val" style="width:70%;color:#ffffff;background-color:#1b3f7a;font-weight:bold;border:1px solid #15325b;">Keterangan / Isian</th>
    </tr>
  </thead>
  <tbody>${rowsHtml}</tbody>
</table>
<div class="foot">Dokumen ini dibuat otomatis melalui Sistem Pelaporan Kinerja BBPPMPV Bidang Bangunan dan Listrik.</div>
</div>
</body>
</html>`;
}


function generateAndDownloadWord(config, formData, embeddedImages = []) {
  const wordContent = buildWordContent(config, formData, embeddedImages);
  const blob = new Blob(['\uFEFF' + wordContent], { type: 'application/msword' });
  const fileName = `Laporan_Kinerja_${config.title.replace(/[\s,&]+/g, '_')}_2026.doc`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}


function generateAndPrintPdf(config, formData, embeddedImages = []) {
  const tanggalHariIni = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let rowsHtml = '';
  config.fields.forEach(field => {
    const val = formData[field.label] || '-';

    if (field.type === 'file') {
      rowsHtml += `
        <tr>
          <td class="col-label">${escapeXml(field.label)}</td>
          <td class="col-val">${nl2br(val)}</td>
        </tr>
      `;
      if (embeddedImages.length > 0) {
        let imgHtml = '';
        embeddedImages.forEach(img => {
          imgHtml += `<img src="${img.dataUrl}" alt="${escapeXml(img.name)}"
            style="max-width:100%; max-height:260px; margin:5px 5px 5px 0; border:1px solid #ccc; display:block;" />`;
        });
        rowsHtml += `
          <tr>
            <td class="col-label">Foto Dokumentasi</td>
            <td class="col-val">${imgHtml}</td>
          </tr>
        `;
      }
    } else {
      rowsHtml += `
        <tr>
          <td class="col-label">${escapeXml(field.label)}</td>
          <td class="col-val">${nl2br(val)}</td>
        </tr>
      `;
    }
  });

  const printHtml = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="utf-8">
      <title>Laporan Kinerja - ${escapeXml(config.title)}</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 1.8cm 1.5cm 1.8cm 1.5cm;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Times New Roman', Times, serif;
          font-size: 11pt;
          line-height: 1.4;
          color: #000;
          background: #fff;
          padding: 20px;
        }
        .report-title-box {
          text-align: center;
          margin: 16px 0 14px;
        }
        .report-title {
          font-size: 13pt;
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: underline;
        }
        .report-subtitle {
          font-size: 11pt;
          font-weight: bold;
          margin-top: 2px;
        }
        .meta-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 14px;
          font-size: 10.5pt;
        }
        .meta-table td {
          padding: 3px 4px;
          vertical-align: top;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
          font-size: 10pt;
        }
        .data-table th, .data-table td {
          border: 1px solid #333;
          padding: 7px 10px;
          vertical-align: top;
        }
        .data-table th {
          background-color: #eaeaea;
          font-weight: bold;
          text-align: center;
        }
        .col-label {
          width: 33%;
          font-weight: bold;
          background-color: #fcfcfc;
        }
        .col-val {
          text-align: justify;
        }
      </style>
    </head>
    <body>
      <div class="report-title-box">
        <div class="report-title">LAPORAN CAPAIAN INDIKATOR KINERJA TAHUN 2026</div>
        <div class="report-subtitle">${escapeXml(config.title)}</div>
      </div>

      <table class="meta-table">
        <tr>
          <td style="width: 140px;"><strong>Tim Kerja</strong></td>
          <td>: ${escapeXml(config.parentTitle)}</td>
        </tr>
        <tr>
          <td><strong>Bagian / Sub-Tim</strong></td>
          <td>: ${escapeXml(config.title)}</td>
        </tr>
        <tr>
          <td><strong>Tanggal Pengisian</strong></td>
          <td>: ${tanggalHariIni}</td>
        </tr>
      </table>

      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 33%;">Instrumen Pertanyaan</th>
            <th>Keterangan / Hasil Pengisian</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

    </body>
    </html>
  `;

  const printWindow = window.open('', '_blank', 'width=850,height=900');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(printHtml);
    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
    }, 400);
    showToast('✔ Jendela cetak / simpan PDF telah dibuka!', 'success');
  } else {
    let iframe = document.getElementById('print-iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'print-iframe';
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      document.body.appendChild(iframe);
    }
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(printHtml);
    doc.close();
    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }, 400);
    showToast('✔ Jendela cetak / simpan PDF telah dibuka!', 'success');
  }
}


function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.className = '';
  toast.classList.add(type);
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}


// ===== SOUL BBL WELCOME POPUP =====
function closeSoulPopup() {
  const overlay = document.getElementById('soul-popup-overlay');
  if (overlay) {
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 300);
  }
}
// ===== END SOUL BBL WELCOME POPUP =====

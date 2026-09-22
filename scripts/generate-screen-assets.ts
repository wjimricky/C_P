import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function saveAsset(baseName: string, content: string) {
  // Save with .jpg, .png, and .svg extensions
  fs.writeFileSync(path.join(publicDir, `${baseName}.jpg`), content, 'utf-8');
  fs.writeFileSync(path.join(publicDir, `${baseName}.png`), content, 'utf-8');
  fs.writeFileSync(path.join(publicDir, `${baseName}.svg`), content, 'utf-8');
  console.log(`Saved: ${baseName}`);
}

// 1. Suivi client vue 1 (HubSpot Pipeline)
const svgSc1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#F5F8FA"/>
  <rect width="1200" height="48" fill="#2D3E50"/>
  <circle cx="28" cy="24" r="7" fill="#FF7A59"/>
  <text x="44" y="29" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold">HubSpot CRM</text>
  <rect x="180" y="10" width="220" height="28" rx="4" fill="#1D2B36"/>
  <text x="195" y="28" fill="#7C98B6" font-family="sans-serif" font-size="12">Recherche ( / )</text>
  <rect x="960" y="12" width="85" height="24" rx="4" fill="#00A4BD"/>
  <text x="972" y="28" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">Breeze AI</text>
  <text x="1060" y="28" fill="#CBD6E2" font-family="sans-serif" font-size="12" font-weight="500">Candya R.</text>
  <circle cx="1160" cy="24" r="12" fill="#FF7A59"/>
  <text x="1156" y="28" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold">C</text>

  <rect y="48" width="1200" height="52" fill="#FFFFFF" stroke="#CBD6E2" stroke-width="1"/>
  <text x="24" y="80" fill="#33475B" font-family="sans-serif" font-size="18" font-weight="bold">Transactions — Pipeline De Vente</text>
  <rect x="980" y="58" width="190" height="32" rx="4" fill="#FF7A59"/>
  <text x="1015" y="79" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold">+ Transaction</text>

  <!-- Prospection -->
  <g transform="translate(24, 115)">
    <rect width="210" height="580" rx="8" fill="#EAF0F6" stroke="#DFE3EB"/>
    <text x="16" y="30" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Prospection</text>
    <rect x="165" y="15" width="25" height="20" rx="10" fill="#FFFFFF"/>
    <text x="174" y="29" fill="#516F90" font-family="sans-serif" font-size="11" font-weight="bold">2</text>
    <rect x="10" y="48" width="190" height="110" rx="6" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="20" y="72" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">Assistante admin et</text>
    <text x="20" y="88" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">support client</text>
    <text x="20" y="112" fill="#7C98B6" font-family="sans-serif" font-size="10">08/09/2026 - 30/09/2026</text>
    <line x1="20" y1="125" x2="190" y2="125" stroke="#F5F8FA"/>
    <text x="20" y="143" fill="#FF7A59" font-family="sans-serif" font-size="11" font-weight="bold">Thomas Laurent</text>
    <rect x="135" y="132" width="55" height="18" rx="4" fill="#FEF3C7"/>
    <text x="140" y="145" fill="#B45309" font-family="sans-serif" font-size="9" font-weight="bold">dans 3j</text>

    <rect x="10" y="168" width="190" height="110" rx="6" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="20" y="192" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">Assistante virtuelle admin</text>
    <text x="20" y="208" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">et support client</text>
    <text x="20" y="232" fill="#7C98B6" font-family="sans-serif" font-size="10">08/09/2026 - 30/09/2026</text>
    <line x1="20" y1="245" x2="190" y2="245" stroke="#F5F8FA"/>
    <text x="20" y="263" fill="#FF7A59" font-family="sans-serif" font-size="11" font-weight="bold">Julien Delorme</text>
    <text x="125" y="263" fill="#94A3B8" font-family="sans-serif" font-size="9">il y a 34 min</text>
  </g>

  <!-- Premier Contact -->
  <g transform="translate(250, 115)">
    <rect width="210" height="580" rx="8" fill="#EAF0F6" stroke="#DFE3EB"/>
    <text x="16" y="30" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Premier Contact</text>
    <rect x="165" y="15" width="25" height="20" rx="10" fill="#FFFFFF"/>
    <text x="174" y="29" fill="#516F90" font-family="sans-serif" font-size="11" font-weight="bold">1</text>
    <rect x="10" y="48" width="190" height="110" rx="6" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="20" y="72" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">Assistante virtuelle SAV</text>
    <text x="20" y="98" fill="#7C98B6" font-family="sans-serif" font-size="10">08/09/2026 - 30/09/2026</text>
    <line x1="20" y1="120" x2="190" y2="120" stroke="#F5F8FA"/>
    <text x="20" y="143" fill="#FF7A59" font-family="sans-serif" font-size="11" font-weight="bold">Lucie Dupont</text>
    <rect x="135" y="132" width="55" height="18" rx="4" fill="#FEF3C7"/>
    <text x="140" y="145" fill="#B45309" font-family="sans-serif" font-size="9" font-weight="bold">dans 2j</text>
  </g>

  <!-- Qualification -->
  <g transform="translate(476, 115)">
    <rect width="210" height="580" rx="8" fill="#EAF0F6" stroke="#DFE3EB"/>
    <text x="16" y="30" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Qualification</text>
    <rect x="165" y="15" width="25" height="20" rx="10" fill="#FFFFFF"/>
    <text x="174" y="29" fill="#516F90" font-family="sans-serif" font-size="11" font-weight="bold">1</text>
    <rect x="10" y="48" width="190" height="110" rx="6" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="20" y="72" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">Assistante virtuelle Admin</text>
    <text x="20" y="88" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">et support client</text>
    <text x="20" y="112" fill="#7C98B6" font-family="sans-serif" font-size="10">08/09/2026 - 30/09/2026</text>
    <line x1="20" y1="125" x2="190" y2="125" stroke="#F5F8FA"/>
    <text x="20" y="143" fill="#FF7A59" font-family="sans-serif" font-size="11" font-weight="bold">Élodie Moreau</text>
  </g>

  <!-- Proposition -->
  <g transform="translate(702, 115)">
    <rect width="210" height="580" rx="8" fill="#EAF0F6" stroke="#DFE3EB"/>
    <text x="16" y="30" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Proposition de l'offre</text>
    <rect x="165" y="15" width="25" height="20" rx="10" fill="#FFFFFF"/>
    <text x="174" y="29" fill="#516F90" font-family="sans-serif" font-size="11" font-weight="bold">1</text>
    <rect x="10" y="48" width="190" height="110" rx="6" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="20" y="72" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">Assistante virtuelle admin</text>
    <text x="20" y="98" fill="#7C98B6" font-family="sans-serif" font-size="10">08/09/2026 - 30/09/2026</text>
    <line x1="20" y1="120" x2="190" y2="120" stroke="#F5F8FA"/>
    <text x="20" y="143" fill="#FF7A59" font-family="sans-serif" font-size="11" font-weight="bold">Marc Chevalier</text>
  </g>

  <!-- Gagné -->
  <g transform="translate(928, 115)">
    <rect width="245" height="580" rx="8" fill="#EAF0F6" stroke="#DFE3EB"/>
    <text x="16" y="30" fill="#047857" font-family="sans-serif" font-size="13" font-weight="bold">Gagné (Client Actif)</text>
    <rect x="195" y="15" width="25" height="20" rx="10" fill="#D1FAE5"/>
    <text x="204" y="29" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">1</text>
    <rect x="10" y="48" width="225" height="110" rx="6" fill="#FFFFFF" stroke="#10B981" stroke-width="2"/>
    <text x="20" y="72" fill="#33475B" font-family="sans-serif" font-size="11" font-weight="bold">Assistante virtuelle admin</text>
    <text x="20" y="98" fill="#7C98B6" font-family="sans-serif" font-size="10">08/09/2026</text>
    <line x1="20" y1="120" x2="225" y2="120" stroke="#F5F8FA"/>
    <text x="20" y="143" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Nina B — Signé</text>
  </g>
</svg>`;

// 2. Suivi Client Vue 2 (HubSpot Contact Lucie Dupont)
const svgSc2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#FFFFFF"/>
  <rect width="1200" height="60" fill="#FAF8F5" stroke="#CBD6E2" stroke-width="1"/>
  <circle cx="45" cy="30" r="18" fill="#DFE3EB"/>
  <text x="35" y="36" fill="#516F90" font-family="sans-serif" font-size="14" font-weight="bold">LD</text>
  <text x="75" y="28" fill="#2D3E50" font-family="sans-serif" font-size="16" font-weight="bold">Lucie Dupont</text>
  <rect x="185" y="15" width="80" height="20" rx="10" fill="#FFEDD5"/>
  <text x="195" y="29" fill="#C2410C" font-family="sans-serif" font-size="11" font-weight="bold">Opportunité</text>
  <text x="75" y="46" fill="#7C98B6" font-family="sans-serif" font-size="12">lucie30@gmail.com</text>

  <!-- Left Column: Informations clés -->
  <g transform="translate(24, 80)">
    <rect width="320" height="640" rx="8" fill="#F5F8FA" stroke="#DFE3EB"/>
    <text x="20" y="35" fill="#2D3E50" font-family="sans-serif" font-size="14" font-weight="bold">INFORMATIONS CLÉS</text>
    <text x="20" y="70" fill="#7C98B6" font-family="sans-serif" font-size="11">Propriétaire du contact</text>
    <text x="20" y="90" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Candya RANDRIAMANARINA</text>

    <text x="20" y="130" fill="#7C98B6" font-family="sans-serif" font-size="11">Phase du cycle de vie</text>
    <rect x="20" y="140" width="140" height="24" rx="4" fill="#FFEDD5"/>
    <text x="28" y="156" fill="#C2410C" font-family="sans-serif" font-size="11" font-weight="bold">Opportunité (Actif)</text>

    <text x="20" y="195" fill="#7C98B6" font-family="sans-serif" font-size="11">Statut du lead</text>
    <text x="20" y="215" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Nouveau</text>

    <text x="20" y="255" fill="#7C98B6" font-family="sans-serif" font-size="11">Mode de facturation</text>
    <text x="20" y="275" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Mensuel</text>

    <text x="20" y="315" fill="#7C98B6" font-family="sans-serif" font-size="11">Dernier contact</text>
    <text x="20" y="335" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">08/09/2026 à 08:00 (GMT+3)</text>
  </g>

  <!-- Center Column: Synthèse Cadrage & Interactions -->
  <g transform="translate(364, 80)">
    <!-- Synthèse IA -->
    <rect width="520" height="250" rx="8" fill="#FAF7F2" stroke="#E8DFD3"/>
    <text x="24" y="35" fill="#7A583E" font-family="sans-serif" font-size="14" font-weight="bold">Synthèse de cadrage commerciale</text>
    <text x="380" y="35" fill="#9A8775" font-family="sans-serif" font-size="11">8 septembre 2026</text>
    
    <text x="24" y="70" fill="#2D241E" font-family="sans-serif" font-size="12" font-weight="bold">• Besoin identifié :</text>
    <text x="24" y="92" fill="#5C4D3E" font-family="sans-serif" font-size="12">Lors de l'appel de cadrage du 8 septembre 2026, Lucie souhaite</text>
    <text x="24" y="112" fill="#5C4D3E" font-family="sans-serif" font-size="12">structurer son offre de conseil et automatiser son suivi.</text>

    <text x="24" y="150" fill="#2D241E" font-family="sans-serif" font-size="12" font-weight="bold">• Documents transmis :</text>
    <text x="24" y="172" fill="#5C4D3E" font-family="sans-serif" font-size="12">La proposition commerciale et la convention d'accompagnement ont été</text>
    <text x="24" y="192" fill="#5C4D3E" font-family="sans-serif" font-size="12">envoyées par e-mail le 8 septembre 2026.</text>

    <!-- Interactions récentes -->
    <g transform="translate(0, 270)">
      <rect width="520" height="370" rx="8" fill="#FFFFFF" stroke="#DFE3EB"/>
      <text x="24" y="35" fill="#33475B" font-family="sans-serif" font-size="14" font-weight="bold">Interactions & Tâches sortantes</text>
      <text x="24" y="70" fill="#516F90" font-family="sans-serif" font-size="12">Le 8 septembre, les besoins étaient clairs et une proposition a été envoyée.</text>
      <text x="24" y="90" fill="#516F90" font-family="sans-serif" font-size="12">Un suivi est prévu pour confirmer la signature et le rendez-vous.</text>

      <rect x="24" y="120" width="470" height="60" rx="6" fill="#FFFBEB" stroke="#FDE68A"/>
      <text x="40" y="145" fill="#B45309" font-family="sans-serif" font-size="12" font-weight="bold">Tâche attribuée à Candya RANDRIAMANARINA</text>
      <text x="40" y="165" fill="#78350F" font-family="sans-serif" font-size="11">Échéance : 10 septembre • Confirmer la signature du contrat</text>
    </g>
  </g>

  <!-- Right Column: Transactions -->
  <g transform="translate(904, 80)">
    <rect width="270" height="640" rx="8" fill="#F5F8FA" stroke="#DFE3EB"/>
    <text x="20" y="35" fill="#2D3E50" font-family="sans-serif" font-size="14" font-weight="bold">TRANSACTIONS (1)</text>
    <rect x="15" y="55" width="240" height="100" rx="6" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="25" y="80" fill="#00A4BD" font-family="sans-serif" font-size="13" font-weight="bold">Assistante virtuelle SAV</text>
    <text x="25" y="105" fill="#7C98B6" font-family="sans-serif" font-size="11">Phase : Premier Contact</text>
    <text x="25" y="125" fill="#516F90" font-family="sans-serif" font-size="11">Clôture : 30 septembre 2026</text>
  </g>
</svg>`;

// 3. Suivi client vue 3 (HubSpot Tâches CRM)
const svgSc3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#FFFFFF"/>
  <rect width="1200" height="60" fill="#FAF8F5" stroke="#CBD6E2" stroke-width="1"/>
  <text x="24" y="38" fill="#2D3E50" font-family="sans-serif" font-size="18" font-weight="bold">Tâches CRM HubSpot</text>
  <rect x="230" y="18" width="260" height="26" rx="13" fill="#EAF0F6"/>
  <text x="245" y="35" fill="#00A4BD" font-family="sans-serif" font-size="12" font-weight="bold">Attribué à : Candya RANDRIAMANARINA</text>

  <!-- Table -->
  <g transform="translate(24, 90)">
    <rect width="1152" height="620" rx="8" fill="#FFFFFF" stroke="#DFE3EB"/>
    <rect width="1152" height="40" fill="#F5F8FA" rx="8"/>
    <text x="50" y="25" fill="#7C98B6" font-family="sans-serif" font-size="11" font-weight="bold">TITRE DE LA TÂCHE</text>
    <text x="320" y="25" fill="#7C98B6" font-family="sans-serif" font-size="11" font-weight="bold">CONTACT ASSOCIÉ</text>
    <text x="520" y="25" fill="#7C98B6" font-family="sans-serif" font-size="11" font-weight="bold">STATUT</text>
    <text x="680" y="25" fill="#7C98B6" font-family="sans-serif" font-size="11" font-weight="bold">ÉCHÉANCE</text>
    <text x="860" y="25" fill="#7C98B6" font-family="sans-serif" font-size="11" font-weight="bold">PROCHAINE ÉTAPE</text>

    <!-- Row 1 -->
    <line x1="0" y1="40" x2="1152" y2="40" stroke="#DFE3EB"/>
    <rect x="20" y="58" width="16" height="16" rx="3" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="50" y="70" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Relance signature contrat</text>
    <text x="320" y="70" fill="#00A4BD" font-family="sans-serif" font-size="13" font-weight="bold">Marc Chevalier</text>
    <rect x="520" y="55" width="95" height="22" rx="4" fill="#EFF6FF"/>
    <text x="528" y="70" fill="#1D4ED8" font-family="sans-serif" font-size="11" font-weight="bold">Non commencé</text>
    <text x="680" y="70" fill="#B45309" font-family="sans-serif" font-size="12" font-weight="bold">Demain à 08:00</text>
    <text x="860" y="70" fill="#516F90" font-family="sans-serif" font-size="12">Validation contrat &amp; acompte</text>

    <!-- Row 2 -->
    <line x1="0" y1="95" x2="1152" y2="95" stroke="#F0F4F8"/>
    <rect x="20" y="113" width="16" height="16" rx="3" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="50" y="125" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Rédiger la proposition</text>
    <text x="320" y="125" fill="#00A4BD" font-family="sans-serif" font-size="13" font-weight="bold">Élodie Moreau</text>
    <rect x="520" y="110" width="95" height="22" rx="4" fill="#EFF6FF"/>
    <text x="528" y="125" fill="#1D4ED8" font-family="sans-serif" font-size="11" font-weight="bold">Non commencé</text>
    <text x="680" y="125" fill="#B45309" font-family="sans-serif" font-size="12" font-weight="bold">Demain à 08:00</text>
    <text x="860" y="125" fill="#516F90" font-family="sans-serif" font-size="12">Rédaction &amp; envoi de l'offre</text>

    <!-- Row 3 -->
    <line x1="0" y1="150" x2="1152" y2="150" stroke="#F0F4F8"/>
    <rect x="20" y="168" width="16" height="16" rx="3" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="50" y="180" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Relance premier contact</text>
    <text x="320" y="180" fill="#00A4BD" font-family="sans-serif" font-size="13" font-weight="bold">Julien Delorme</text>
    <rect x="520" y="165" width="95" height="22" rx="4" fill="#EFF6FF"/>
    <text x="528" y="180" fill="#1D4ED8" font-family="sans-serif" font-size="11" font-weight="bold">Non commencé</text>
    <text x="680" y="180" fill="#516F90" font-family="sans-serif" font-size="12">11 sept. 2026</text>
    <text x="860" y="180" fill="#516F90" font-family="sans-serif" font-size="12">Envoi d'informations &amp; qualification</text>

    <!-- Row 4 -->
    <line x1="0" y1="205" x2="1152" y2="205" stroke="#F0F4F8"/>
    <rect x="20" y="223" width="16" height="16" rx="3" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="50" y="235" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Suivi de dossier prospect</text>
    <text x="320" y="235" fill="#00A4BD" font-family="sans-serif" font-size="13" font-weight="bold">Thomas Laurent</text>
    <rect x="520" y="220" width="95" height="22" rx="4" fill="#EFF6FF"/>
    <text x="528" y="235" fill="#1D4ED8" font-family="sans-serif" font-size="11" font-weight="bold">Non commencé</text>
    <text x="680" y="235" fill="#516F90" font-family="sans-serif" font-size="12">11 sept. 2026</text>
    <text x="860" y="235" fill="#516F90" font-family="sans-serif" font-size="12">Envoi d'informations &amp; qualification</text>

    <!-- Row 5 -->
    <line x1="0" y1="260" x2="1152" y2="260" stroke="#F0F4F8"/>
    <rect x="20" y="278" width="16" height="16" rx="3" fill="#FFFFFF" stroke="#CBD6E2"/>
    <text x="50" y="290" fill="#33475B" font-family="sans-serif" font-size="13" font-weight="bold">Vérifier la prise de rdv</text>
    <text x="320" y="290" fill="#00A4BD" font-family="sans-serif" font-size="13" font-weight="bold">Lucie Dupont</text>
    <rect x="520" y="275" width="95" height="22" rx="4" fill="#EFF6FF"/>
    <text x="528" y="290" fill="#1D4ED8" font-family="sans-serif" font-size="11" font-weight="bold">Non commencé</text>
    <text x="680" y="290" fill="#B45309" font-family="sans-serif" font-size="12" font-weight="bold">10 sept. 2026</text>
    <text x="860" y="290" fill="#516F90" font-family="sans-serif" font-size="12">Fixation de l'appel découverte</text>
  </g>
</svg>`;

// 4. Suivi tâches vue 1 (Notion Table)
const svgSt1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#FFFFFF"/>
  <rect width="1200" height="60" fill="#FBFAF9" stroke="#EDECE9" stroke-width="1"/>
  <text x="24" y="38" fill="#37352F" font-family="sans-serif" font-size="18" font-weight="bold">📋 Suivi des tâches • Notion</text>
  <rect x="300" y="18" width="90" height="26" rx="4" fill="#EFEFEF"/>
  <text x="315" y="35" fill="#787774" font-family="sans-serif" font-size="12" font-weight="bold">Vue Table</text>

  <!-- Table -->
  <g transform="translate(24, 90)">
    <rect width="1152" height="620" rx="8" fill="#FFFFFF" stroke="#EDECE9"/>
    <rect width="1152" height="40" fill="#FBFAF9" rx="8"/>
    <text x="24" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">TÂCHES</text>
    <text x="360" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">NOTES</text>
    <text x="580" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">PRIORITÉ</text>
    <text x="700" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">DEADLINE</text>
    <text x="850" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">STATUT</text>
    <text x="980" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">RESPONSABLE</text>

    <!-- Rows -->
    <line x1="0" y1="40" x2="1152" y2="40" stroke="#EDECE9"/>
    <!-- Row 1 -->
    <text x="24" y="70" fill="#37352F" font-family="sans-serif" font-size="13" font-weight="bold">Valider la maquette avant envoi au client</text>
    <text x="360" y="70" fill="#787774" font-family="sans-serif" font-size="12">Vérifier la cohérence avec le brief...</text>
    <rect x="580" y="55" width="55" height="22" rx="4" fill="#FFE4E6"/>
    <text x="590" y="70" fill="#BE123C" font-family="sans-serif" font-size="11" font-weight="bold">High</text>
    <text x="700" y="70" fill="#37352F" font-family="sans-serif" font-size="12">Sept. 8, 2026</text>
    <rect x="850" y="55" width="75" height="22" rx="4" fill="#FEF3C7"/>
    <text x="860" y="70" fill="#B45309" font-family="sans-serif" font-size="11" font-weight="bold">En cours</text>
    <text x="980" y="70" fill="#2D241E" font-family="sans-serif" font-size="12" font-weight="bold">Candya R.</text>

    <!-- Row 2 -->
    <line x1="0" y1="95" x2="1152" y2="95" stroke="#F7F6F5"/>
    <text x="24" y="125" fill="#37352F" font-family="sans-serif" font-size="13" font-weight="bold">Répondre à une demande de devis reçue hier</text>
    <text x="360" y="125" fill="#787774" font-family="sans-serif" font-size="12">Prospect intéressé par une refonte...</text>
    <rect x="580" y="110" width="65" height="22" rx="4" fill="#FFEDD5"/>
    <text x="590" y="125" fill="#C2410C" font-family="sans-serif" font-size="11" font-weight="bold">Medium</text>
    <text x="700" y="125" fill="#37352F" font-family="sans-serif" font-size="12">Sept. 8, 2026</text>
    <rect x="850" y="110" width="75" height="22" rx="4" fill="#D1FAE5"/>
    <text x="860" y="125" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Terminé</text>
    <text x="980" y="125" fill="#2D241E" font-family="sans-serif" font-size="12" font-weight="bold">Candya R.</text>

    <!-- Row 3 -->
    <line x1="0" y1="150" x2="1152" y2="150" stroke="#F7F6F5"/>
    <text x="24" y="180" fill="#37352F" font-family="sans-serif" font-size="13" font-weight="bold">Livrer les visuels pour le rendu client</text>
    <text x="360" y="180" fill="#787774" font-family="sans-serif" font-size="12">Validation en cours via portail client...</text>
    <rect x="580" y="165" width="65" height="22" rx="4" fill="#FFEDD5"/>
    <text x="590" y="180" fill="#C2410C" font-family="sans-serif" font-size="11" font-weight="bold">Medium</text>
    <text x="700" y="180" fill="#37352F" font-family="sans-serif" font-size="12">Sept. 15, 2026</text>
    <rect x="850" y="165" width="65" height="22" rx="4" fill="#EFEFEF"/>
    <text x="860" y="180" fill="#787774" font-family="sans-serif" font-size="11" font-weight="bold">À faire</text>
    <text x="980" y="180" fill="#9B9A97" font-family="sans-serif" font-size="12">—</text>

    <!-- Row 4 -->
    <line x1="0" y1="205" x2="1152" y2="205" stroke="#F7F6F5"/>
    <text x="24" y="235" fill="#37352F" font-family="sans-serif" font-size="13" font-weight="bold">Relancer un client pour une facture impayée</text>
    <text x="360" y="235" fill="#787774" font-family="sans-serif" font-size="12">Client Maison Verdier relancé avec tact...</text>
    <rect x="580" y="220" width="55" height="22" rx="4" fill="#FFE4E6"/>
    <text x="590" y="235" fill="#BE123C" font-family="sans-serif" font-size="11" font-weight="bold">High</text>
    <text x="700" y="235" fill="#37352F" font-family="sans-serif" font-size="12">July 15, 2026</text>
    <rect x="850" y="220" width="75" height="22" rx="4" fill="#D1FAE5"/>
    <text x="860" y="235" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Terminé</text>
    <text x="980" y="235" fill="#2D241E" font-family="sans-serif" font-size="12" font-weight="bold">Candya R.</text>

    <!-- Row 5 -->
    <line x1="0" y1="260" x2="1152" y2="260" stroke="#F7F6F5"/>
    <text x="24" y="290" fill="#37352F" font-family="sans-serif" font-size="13" font-weight="bold">Envoyer les factures mensuelles aux clients</text>
    <text x="360" y="290" fill="#787774" font-family="sans-serif" font-size="12">4 factures à préparer et envoyer sous 24h...</text>
    <rect x="580" y="275" width="55" height="22" rx="4" fill="#FFE4E6"/>
    <text x="590" y="290" fill="#BE123C" font-family="sans-serif" font-size="11" font-weight="bold">High</text>
    <text x="700" y="290" fill="#37352F" font-family="sans-serif" font-size="12">Sept. 15, 2026</text>
    <rect x="850" y="275" width="65" height="22" rx="4" fill="#EFEFEF"/>
    <text x="860" y="290" fill="#787774" font-family="sans-serif" font-size="11" font-weight="bold">À faire</text>
    <text x="980" y="290" fill="#2D241E" font-family="sans-serif" font-size="12" font-weight="bold">Candya R.</text>
  </g>
</svg>`;

// 5. Suivi tâches vue 2 (Notion Kanban / Board View)
const svgSt2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#FBFAF9"/>
  <rect width="1200" height="60" fill="#FFFFFF" stroke="#EDECE9" stroke-width="1"/>
  <text x="24" y="38" fill="#37352F" font-family="sans-serif" font-size="18" font-weight="bold">📋 Suivi des tâches — Board View Kanban</text>

  <!-- Colonne À faire (4) -->
  <g transform="translate(24, 90)">
    <text x="10" y="25" fill="#787774" font-family="sans-serif" font-size="14" font-weight="bold">À faire (4)</text>
    <rect y="40" width="270" height="100" rx="8" fill="#FFFFFF" stroke="#EDECE9"/>
    <text x="16" y="70" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">Organiser le point d'équipe</text>
    <text x="16" y="90" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">hebdomadaire</text>
    <rect x="16" y="105" width="45" height="18" rx="4" fill="#D1FAE5"/>
    <text x="22" y="118" fill="#047857" font-family="sans-serif" font-size="9" font-weight="bold">Low</text>

    <rect y="155" width="270" height="100" rx="8" fill="#FFFFFF" stroke="#EDECE9"/>
    <text x="16" y="185" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">Livrer les visuels pour le</text>
    <text x="16" y="205" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">rendu client de vendredi</text>
    <rect x="16" y="220" width="55" height="18" rx="4" fill="#FFEDD5"/>
    <text x="22" y="233" fill="#C2410C" font-family="sans-serif" font-size="9" font-weight="bold">Medium</text>

    <rect y="270" width="270" height="100" rx="8" fill="#FFFFFF" stroke="#EDECE9"/>
    <text x="16" y="300" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">Rédiger le contenu du site</text>
    <text x="16" y="320" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">pour le client Atelier Ros</text>
    <rect x="16" y="335" width="55" height="18" rx="4" fill="#FFEDD5"/>
    <text x="22" y="348" fill="#C2410C" font-family="sans-serif" font-size="9" font-weight="bold">Medium</text>

    <rect y="385" width="270" height="100" rx="8" fill="#FFFFFF" stroke="#EDECE9"/>
    <text x="16" y="415" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">Envoyer les factures mensuelles</text>
    <text x="16" y="435" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">aux clients actifs</text>
    <rect x="16" y="450" width="45" height="18" rx="4" fill="#FFE4E6"/>
    <text x="22" y="463" fill="#BE123C" font-family="sans-serif" font-size="9" font-weight="bold">High</text>
  </g>

  <!-- Colonne En cours (1) -->
  <g transform="translate(320, 90)">
    <text x="10" y="25" fill="#B45309" font-family="sans-serif" font-size="14" font-weight="bold">En cours (1)</text>
    <rect y="40" width="270" height="110" rx="8" fill="#FFFFFF" stroke="#F59E0B" stroke-width="2"/>
    <text x="16" y="70" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">Valider la maquette avant</text>
    <text x="16" y="90" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">envoi au client</text>
    <rect x="16" y="110" width="45" height="18" rx="4" fill="#FFE4E6"/>
    <text x="22" y="123" fill="#BE123C" font-family="sans-serif" font-size="9" font-weight="bold">High</text>
    <text x="170" y="123" fill="#787774" font-family="sans-serif" font-size="11" font-weight="bold">Candya R.</text>
  </g>

  <!-- Colonne Terminé (2) -->
  <g transform="translate(616, 90)">
    <text x="10" y="25" fill="#047857" font-family="sans-serif" font-size="14" font-weight="bold">Terminé (2)</text>
    <rect y="40" width="270" height="100" rx="8" fill="#FFFFFF" stroke="#10B981" stroke-width="2"/>
    <text x="16" y="70" fill="#787774" font-family="sans-serif" font-size="12" font-weight="bold" text-decoration="line-through">Répondre à une demande</text>
    <text x="16" y="90" fill="#787774" font-family="sans-serif" font-size="12" font-weight="bold" text-decoration="line-through">de devis reçue hier</text>
    <text x="16" y="120" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Traité sous 24h</text>

    <rect y="155" width="270" height="100" rx="8" fill="#FFFFFF" stroke="#10B981" stroke-width="2"/>
    <text x="16" y="185" fill="#787774" font-family="sans-serif" font-size="12" font-weight="bold" text-decoration="line-through">Relancer un client pour une</text>
    <text x="16" y="205" fill="#787774" font-family="sans-serif" font-size="12" font-weight="bold" text-decoration="line-through">facture impayée depuis 15j</text>
    <text x="16" y="235" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Régularisé</text>
  </g>

  <!-- Colonne Bloqué (0) -->
  <g transform="translate(912, 90)">
    <text x="10" y="25" fill="#787774" font-family="sans-serif" font-size="14" font-weight="bold">Bloqué (0)</text>
    <rect y="40" width="260" height="120" rx="8" fill="#FFFFFF" stroke="#EDECE9" stroke-dasharray="6,6"/>
    <text x="75" y="105" fill="#9B9A97" font-family="sans-serif" font-size="13">Aucun blocage</text>
  </g>
</svg>`;

// 6. Boite mail vue 1 (Organisation Gmail)
const svgEs1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#F6F8FC"/>
  <rect width="1200" height="60" fill="#FFFFFF" stroke="#E0E2E7" stroke-width="1"/>
  <text x="24" y="38" fill="#D93025" font-family="sans-serif" font-size="18" font-weight="bold">Gmail Pro • Candya Organisation</text>
  <rect x="960" y="16" width="210" height="28" rx="14" fill="#D1FAE5"/>
  <text x="975" y="35" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Inbox Zero • Traitement &lt; 24h</text>

  <!-- Sidebar -->
  <g transform="translate(24, 80)">
    <rect width="250" height="640" rx="8" fill="#FFFFFF" stroke="#E0E2E7"/>
    <rect x="10" y="15" width="230" height="36" rx="18" fill="#FCE8E6"/>
    <text x="35" y="38" fill="#D93025" font-family="sans-serif" font-size="13" font-weight="bold">Boîte de réception (4)</text>

    <text x="20" y="80" fill="#5F6368" font-family="sans-serif" font-size="11" font-weight="bold">LIBELLÉS ORGANISÉS :</text>
    <circle cx="28" cy="110" r="5" fill="#EF4444"/>
    <text x="44" y="115" fill="#202124" font-family="sans-serif" font-size="12">[SAV &amp; Litiges]</text>

    <circle cx="28" cy="145" r="5" fill="#3B82F6"/>
    <text x="44" y="150" fill="#202124" font-family="sans-serif" font-size="12">[Pré-Ventes &amp; Devis]</text>

    <circle cx="28" cy="180" r="5" fill="#10B981"/>
    <text x="44" y="185" fill="#202124" font-family="sans-serif" font-size="12">[Accès Formations]</text>

    <circle cx="28" cy="215" r="5" fill="#F59E0B"/>
    <text x="44" y="220" fill="#202124" font-family="sans-serif" font-size="12">[Facturation &amp; Reçus]</text>
  </g>

  <!-- Message List -->
  <g transform="translate(290, 80)">
    <rect width="886" height="640" rx="8" fill="#FFFFFF" stroke="#E0E2E7"/>
    <!-- Item 1 -->
    <rect x="0" y="0" width="886" height="65" fill="#FFFFFF"/>
    <text x="24" y="38" fill="#202124" font-family="sans-serif" font-size="13" font-weight="bold">Lucia M.</text>
    <rect x="150" y="24" width="130" height="22" rx="4" fill="#FEE2E2"/>
    <text x="160" y="39" fill="#991B1B" font-family="sans-serif" font-size="11" font-weight="bold">SAV Remboursement</text>
    <text x="295" y="38" fill="#5F6368" font-family="sans-serif" font-size="12">Re: Demande de remboursement suite à désagrément — Traité avec tact</text>
    <text x="770" y="38" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Répondu &lt; 24h</text>
    <line x1="0" y1="65" x2="886" y2="65" stroke="#F1F3F4"/>

    <!-- Item 2 -->
    <rect x="0" y="65" width="886" height="65" fill="#FFFFFF"/>
    <text x="24" y="103" fill="#202124" font-family="sans-serif" font-size="13" font-weight="bold">Kamel B.</text>
    <rect x="150" y="89" width="120" height="22" rx="4" fill="#D1FAE5"/>
    <text x="160" y="104" fill="#065F46" font-family="sans-serif" font-size="11" font-weight="bold">Accès formation</text>
    <text x="285" y="103" fill="#5F6368" font-family="sans-serif" font-size="12">Accès à la formation toujours disponible et illimité</text>
    <text x="770" y="103" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Répondu &lt; 1h</text>
    <line x1="0" y1="130" x2="886" y2="130" stroke="#F1F3F4"/>

    <!-- Item 3 -->
    <rect x="0" y="130" width="886" height="65" fill="#FFFFFF"/>
    <text x="24" y="168" fill="#202124" font-family="sans-serif" font-size="13" font-weight="bold">Atelier Ros</text>
    <rect x="150" y="154" width="100" height="22" rx="4" fill="#DBEAFE"/>
    <text x="160" y="169" fill="#1E40AF" font-family="sans-serif" font-size="11" font-weight="bold">Devis &amp; Offre</text>
    <text x="265" y="168" fill="#5F6368" font-family="sans-serif" font-size="12">Validation du devis et planification du call de cadrage</text>
    <text x="770" y="168" fill="#5F6368" font-family="sans-serif" font-size="11">Hier</text>
    <line x1="0" y1="195" x2="886" y2="195" stroke="#F1F3F4"/>
  </g>
</svg>`;

// 7. Exemple email vue 2 (Email Remboursement Lucia)
const svgEs2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#FAF8F5"/>
  <rect width="1200" height="70" fill="#FFFFFF" stroke="#EAE3D8" stroke-width="1"/>
  <text x="30" y="32" fill="#7A583E" font-family="sans-serif" font-size="12" font-weight="bold">MODÈLE DE RÉPONSE SAV — GESTION DE LITIGE</text>
  <text x="30" y="55" fill="#2D241E" font-family="sans-serif" font-size="17" font-weight="bold">Re: Demande de remboursement suite à désagrément</text>
  <rect x="940" y="20" width="220" height="30" rx="15" fill="#D1FAE5"/>
  <text x="960" y="40" fill="#047857" font-family="sans-serif" font-size="12" font-weight="bold">Délai d'envoi : &lt; 24h</text>

  <!-- Email Container -->
  <g transform="translate(30, 95)">
    <rect width="1140" height="620" rx="12" fill="#FFFFFF" stroke="#EAE3D8"/>
    <!-- Meta -->
    <rect width="1140" height="50" rx="12" fill="#FAF7F2"/>
    <text x="30" y="32" fill="#6E5D4F" font-family="sans-serif" font-size="13"><strong>De :</strong> Candya RANDRIAMANARINA &lt;support@major-formation.com&gt;    |    <strong>À :</strong> Lucia    |    <strong>Objet :</strong> Remboursement intégral 297 €</text>
    <line x1="0" y1="50" x2="1140" y2="50" stroke="#EAE3D8"/>

    <!-- Content -->
    <text x="40" y="100" fill="#2D241E" font-family="sans-serif" font-size="16" font-weight="bold">Bonjour Lucia,</text>

    <text x="40" y="145" fill="#3E342B" font-family="sans-serif" font-size="15">Je comprends tout à fait votre colère et votre frustration face à cette situation, et je suis sincèrement désolée pour le</text>
    <text x="40" y="170" fill="#3E342B" font-family="sans-serif" font-size="15">désagrément occasionné.</text>

    <text x="40" y="215" fill="#3E342B" font-family="sans-serif" font-size="15">Sachez que votre demande a bien été prise en compte et transmise en priorité à notre service comptabilité pour procéder</text>
    <text x="40" y="240" fill="#3E342B" font-family="sans-serif" font-size="15">au <tspan font-weight="bold" fill="#047857">remboursement intégral de la somme de 297 €</tspan>.</text>

    <text x="40" y="285" fill="#3E342B" font-family="sans-serif" font-size="15">Je m'occupe de faire le suivi personnellement afin que le virement soit exécuté sur votre compte sous délai, <tspan font-weight="bold">48h à 72h</tspan>.</text>
    <text x="40" y="310" fill="#3E342B" font-family="sans-serif" font-size="15">Je vous enverrai un message de confirmation dès que la transaction aura été validée de notre côté.</text>

    <text x="40" y="355" fill="#3E342B" font-family="sans-serif" font-size="15">Votre satisfaction reste notre priorité, et nous regrettons sincèrement que votre expérience n'ait pas été à la hauteur</text>
    <text x="40" y="380" fill="#3E342B" font-family="sans-serif" font-size="15">de vos attentes.</text>

    <text x="40" y="425" fill="#3E342B" font-family="sans-serif" font-size="15">Je reste à votre entière disposition si vous avez la moindre question entre-temps.</text>

    <text x="40" y="480" fill="#2D241E" font-family="sans-serif" font-size="15" font-weight="bold">Belle journée à vous,</text>
    <text x="40" y="505" fill="#7A583E" font-family="sans-serif" font-size="16" font-weight="bold">L'équipe Major</text>
  </g>
</svg>`;

// 8. Exemple email vue 3 (Email Accès Kamel)
const svgEs3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#FAF8F5"/>
  <rect width="1200" height="70" fill="#FFFFFF" stroke="#EAE3D8" stroke-width="1"/>
  <text x="30" y="32" fill="#7A583E" font-family="sans-serif" font-size="12" font-weight="bold">MODÈLE DE RÉPONSE SAV — GESTION DES ACCÈS FORMATION</text>
  <text x="30" y="55" fill="#2D241E" font-family="sans-serif" font-size="17" font-weight="bold">Accès à la formation toujours disponible</text>
  <rect x="940" y="20" width="220" height="30" rx="15" fill="#D1FAE5"/>
  <text x="965" y="40" fill="#047857" font-family="sans-serif" font-size="12" font-weight="bold">Ton rassurant &amp; bienveillant</text>

  <!-- Email Container -->
  <g transform="translate(30, 95)">
    <rect width="1140" height="620" rx="12" fill="#FFFFFF" stroke="#EAE3D8"/>
    <rect width="1140" height="50" rx="12" fill="#FAF7F2"/>
    <text x="30" y="32" fill="#6E5D4F" font-family="sans-serif" font-size="13"><strong>De :</strong> Candya RANDRIAMANARINA &lt;support@formation.com&gt;    |    <strong>À :</strong> Kamel</text>
    <line x1="0" y1="50" x2="1140" y2="50" stroke="#EAE3D8"/>

    <!-- Content -->
    <text x="40" y="100" fill="#2D241E" font-family="sans-serif" font-size="16" font-weight="bold">Bonjour Kamel,</text>

    <text x="40" y="145" fill="#3E342B" font-family="sans-serif" font-size="15">Merci pour votre message.</text>

    <text x="40" y="195" fill="#3E342B" font-family="sans-serif" font-size="15">Oui, rassurez-vous, votre accès à la formation est <tspan font-weight="bold" fill="#047857">toujours valide</tspan>. Vous pouvez donc reprendre le programme</text>
    <text x="40" y="220" fill="#3E342B" font-family="sans-serif" font-size="15">quand vous le souhaitez et avancer à votre propre rythme.</text>

    <text x="40" y="275" fill="#3E342B" font-family="sans-serif" font-size="15">Nous vous souhaitons une belle reprise et surtout, prenez le temps dont vous avez besoin pour en profiter pleinement.</text>

    <text x="40" y="340" fill="#2D241E" font-family="sans-serif" font-size="15" font-weight="bold">Bien à vous,</text>
    <text x="40" y="365" fill="#7A583E" font-family="sans-serif" font-size="16" font-weight="bold">L'équipe</text>
  </g>
</svg>`;

// 9. Suivi paiement vue 1 (Google Sheets)
const svgSp1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#FFFFFF"/>
  <rect width="1200" height="50" fill="#F8F9FA" stroke="#E0E2E7" stroke-width="1"/>
  <rect x="24" y="15" width="20" height="20" rx="3" fill="#0F9D58"/>
  <text x="54" y="30" fill="#202124" font-family="sans-serif" font-size="15" font-weight="bold">suivi des paiements • Google Sheets</text>
  <rect x="360" y="12" width="260" height="26" rx="4" fill="#E8EAED"/>
  <text x="375" y="29" fill="#5F6368" font-family="sans-serif" font-size="12" font-family="monospace">fx = SUIVI DES PAIEMENTS</text>

  <!-- Table -->
  <g transform="translate(24, 75)">
    <!-- Header Groups -->
    <rect x="0" y="0" width="360" height="30" fill="#1A365D"/>
    <text x="110" y="20" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold">CLIENT &amp; PRODUIT</text>

    <rect x="360" y="0" width="460" height="30" fill="#0F766E"/>
    <text x="550" y="20" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold">PAIEMENT</text>

    <rect x="820" y="0" width="332" height="30" fill="#854D0E"/>
    <text x="930" y="20" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold">ÉCHÉANCES &amp; RESTE</text>

    <!-- Column Headers -->
    <rect x="0" y="30" width="1152" height="35" fill="#F1F5F9" stroke="#D0D5DD"/>
    <text x="15" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Nom Client</text>
    <text x="140" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Date Achat</text>
    <text x="240" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Total (€)</text>
    <text x="320" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Nb</text>
    <text x="380" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Montant/v.</text>
    <text x="490" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Plateforme</text>
    <text x="610" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Statut</text>
    <text x="730" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Date V1</text>
    <text x="830" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Date V2</text>
    <text x="930" y="52" fill="#475467" font-family="sans-serif" font-size="11" font-weight="bold">Date V3</text>
    <text x="1040" y="52" fill="#1A365D" font-family="sans-serif" font-size="11" font-weight="bold">Reste dû (€)</text>

    <!-- Rows -->
    <!-- Marie Dupont -->
    <rect x="0" y="65" width="1152" height="42" fill="#FFFFFF" stroke="#EAECF0"/>
    <text x="15" y="90" fill="#101828" font-family="sans-serif" font-size="12" font-weight="bold">Marie Dupont</text>
    <text x="140" y="90" fill="#475467" font-family="sans-serif" font-size="12">01/06/2026</text>
    <text x="240" y="90" fill="#101828" font-family="sans-serif" font-size="12" font-weight="bold">297,00 €</text>
    <text x="320" y="90" fill="#475467" font-family="sans-serif" font-size="12">3</text>
    <text x="380" y="90" fill="#475467" font-family="sans-serif" font-size="12">99,00 €</text>
    <text x="490" y="90" fill="#475467" font-family="sans-serif" font-size="12">Stripe</text>
    <rect x="600" y="75" width="60" height="22" rx="11" fill="#D1FAE5"/>
    <text x="615" y="90" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Payé</text>
    <text x="730" y="90" fill="#475467" font-family="sans-serif" font-size="12">01/06</text>
    <text x="830" y="90" fill="#475467" font-family="sans-serif" font-size="12">01/07</text>
    <text x="930" y="90" fill="#475467" font-family="sans-serif" font-size="12">01/08</text>
    <text x="1040" y="90" fill="#047857" font-family="sans-serif" font-size="12" font-weight="bold">0,00 €</text>

    <!-- Thomas Martin -->
    <rect x="0" y="107" width="1152" height="42" fill="#FFFFFF" stroke="#EAECF0"/>
    <text x="15" y="132" fill="#101828" font-family="sans-serif" font-size="12" font-weight="bold">Thomas Martin</text>
    <text x="140" y="132" fill="#475467" font-family="sans-serif" font-size="12">05/06/2026</text>
    <text x="240" y="132" fill="#101828" font-family="sans-serif" font-size="12" font-weight="bold">497,00 €</text>
    <text x="320" y="132" fill="#475467" font-family="sans-serif" font-size="12">1</text>
    <text x="380" y="132" fill="#475467" font-family="sans-serif" font-size="12">497,00 €</text>
    <text x="490" y="132" fill="#475467" font-family="sans-serif" font-size="12">PayPal</text>
    <rect x="600" y="117" width="60" height="22" rx="11" fill="#D1FAE5"/>
    <text x="615" y="132" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Payé</text>
    <text x="730" y="132" fill="#475467" font-family="sans-serif" font-size="12">05/06</text>
    <text x="830" y="132" fill="#98A2B3" font-family="sans-serif" font-size="12">—</text>
    <text x="930" y="132" fill="#98A2B3" font-family="sans-serif" font-size="12">—</text>
    <text x="1040" y="132" fill="#047857" font-family="sans-serif" font-size="12" font-weight="bold">0,00 €</text>

    <!-- Sophie Laurent -->
    <rect x="0" y="149" width="1152" height="42" fill="#FFF1F2" stroke="#EAECF0"/>
    <text x="15" y="174" fill="#101828" font-family="sans-serif" font-size="12" font-weight="bold">Sophie Laurent</text>
    <text x="140" y="174" fill="#475467" font-family="sans-serif" font-size="12">08/06/2026</text>
    <text x="240" y="174" fill="#101828" font-family="sans-serif" font-size="12" font-weight="bold">297,00 €</text>
    <text x="320" y="174" fill="#475467" font-family="sans-serif" font-size="12">2</text>
    <text x="380" y="174" fill="#475467" font-family="sans-serif" font-size="12">148,50 €</text>
    <text x="490" y="174" fill="#475467" font-family="sans-serif" font-size="12">Stripe</text>
    <rect x="600" y="159" width="80" height="22" rx="11" fill="#FEE2E2"/>
    <text x="615" y="174" fill="#BE123C" font-family="sans-serif" font-size="11" font-weight="bold">Échoué</text>
    <text x="730" y="174" fill="#475467" font-family="sans-serif" font-size="12">08/06</text>
    <text x="830" y="174" fill="#BE123C" font-family="sans-serif" font-size="12" font-weight="bold">Rejeté</text>
    <text x="930" y="174" fill="#98A2B3" font-family="sans-serif" font-size="12">—</text>
    <text x="1040" y="174" fill="#BE123C" font-family="sans-serif" font-size="12" font-weight="bold">148,50 €</text>

    <!-- André -->
    <rect x="0" y="191" width="1152" height="42" fill="#FFFBEB" stroke="#EAECF0"/>
    <text x="15" y="216" fill="#101828" font-family="sans-serif" font-size="12" font-weight="bold">André</text>
    <text x="140" y="216" fill="#475467" font-family="sans-serif" font-size="12">16/06/2026</text>
    <text x="240" y="216" fill="#101828" font-family="sans-serif" font-size="12" font-weight="bold">497,00 €</text>
    <text x="320" y="216" fill="#475467" font-family="sans-serif" font-size="12">2</text>
    <text x="380" y="216" fill="#475467" font-family="sans-serif" font-size="12">248,50 €</text>
    <text x="490" y="216" fill="#475467" font-family="sans-serif" font-size="12">Stripe</text>
    <rect x="600" y="201" width="80" height="22" rx="11" fill="#FEF3C7"/>
    <text x="615" y="216" fill="#B45309" font-family="sans-serif" font-size="11" font-weight="bold">En attente</text>
    <text x="730" y="216" fill="#475467" font-family="sans-serif" font-size="12">16/06</text>
    <text x="830" y="216" fill="#B45309" font-family="sans-serif" font-size="12">16/07</text>
    <text x="930" y="216" fill="#98A2B3" font-family="sans-serif" font-size="12">—</text>
    <text x="1040" y="216" fill="#B45309" font-family="sans-serif" font-size="12" font-weight="bold">248,50 €</text>
  </g>
</svg>`;

// 10. Suivi paiement vue 2 (Notion)
const svgSp2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <rect width="1200" height="750" fill="#FFFFFF"/>
  <rect width="1200" height="60" fill="#FBFAF9" stroke="#EDECE9" stroke-width="1"/>
  <text x="24" y="38" fill="#37352F" font-family="sans-serif" font-size="18" font-weight="bold">💳 Suivi des paiements • Base Notion Mensuelle</text>
  <rect x="420" y="18" width="170" height="26" rx="4" fill="#EFEFEF"/>
  <text x="435" y="35" fill="#787774" font-family="sans-serif" font-size="12" font-weight="bold">Tous les clients actifs</text>

  <!-- Table -->
  <g transform="translate(24, 90)">
    <rect width="1152" height="620" rx="8" fill="#FFFFFF" stroke="#EDECE9"/>
    <rect width="1152" height="40" fill="#FBFAF9" rx="8"/>
    <text x="24" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">CLIENT</text>
    <text x="220" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">MOYEN</text>
    <text x="340" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">MONTANT</text>
    <text x="450" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">VERSEMENTS</text>
    <text x="590" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">ENCAISSÉ</text>
    <text x="730" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">STATUT</text>
    <text x="890" y="25" fill="#9B9A97" font-family="sans-serif" font-size="11" font-weight="bold">NOTES &amp; RELANCES</text>

    <!-- Row 1 -->
    <line x1="0" y1="40" x2="1152" y2="40" stroke="#EDECE9"/>
    <text x="24" y="70" fill="#37352F" font-family="sans-serif" font-size="13" font-weight="bold">Gabriel Alexandre</text>
    <text x="220" y="70" fill="#787774" font-family="sans-serif" font-size="12">Stripe</text>
    <text x="340" y="70" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">€698.00</text>
    <text x="450" y="70" fill="#787774" font-family="sans-serif" font-size="12">349 (Jan) + 349 (Fév)</text>
    <text x="590" y="70" fill="#047857" font-family="sans-serif" font-size="12" font-weight="bold">€698.00</text>
    <rect x="720" y="55" width="60" height="22" rx="4" fill="#D1FAE5"/>
    <text x="735" y="70" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Payé</text>
    <text x="890" y="70" fill="#787774" font-family="sans-serif" font-size="12">Régularisé sans relance</text>

    <!-- Row 2 -->
    <line x1="0" y1="95" x2="1152" y2="95" stroke="#F7F6F5"/>
    <text x="24" y="125" fill="#37352F" font-family="sans-serif" font-size="13" font-weight="bold">Mathéo</text>
    <text x="220" y="125" fill="#787774" font-family="sans-serif" font-size="12">Virement</text>
    <text x="340" y="125" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">€298.00</text>
    <text x="450" y="125" fill="#787774" font-family="sans-serif" font-size="12">298 (Fév)</text>
    <text x="590" y="125" fill="#047857" font-family="sans-serif" font-size="12" font-weight="bold">€298.00</text>
    <rect x="720" y="110" width="60" height="22" rx="4" fill="#D1FAE5"/>
    <text x="735" y="125" fill="#047857" font-family="sans-serif" font-size="11" font-weight="bold">Payé</text>
    <text x="890" y="125" fill="#787774" font-family="sans-serif" font-size="12">Reçu bancaire vérifié</text>

    <!-- Row 3 -->
    <line x1="0" y1="150" x2="1152" y2="150" stroke="#F7F6F5"/>
    <text x="24" y="180" fill="#37352F" font-family="sans-serif" font-size="13" font-weight="bold">Elodie Fontes</text>
    <text x="220" y="180" fill="#787774" font-family="sans-serif" font-size="12">Stripe</text>
    <text x="340" y="180" fill="#37352F" font-family="sans-serif" font-size="12" font-weight="bold">€1,000.00</text>
    <text x="450" y="180" fill="#787774" font-family="sans-serif" font-size="12">200 + 200 + 200</text>
    <text x="590" y="180" fill="#BE123C" font-family="sans-serif" font-size="12" font-weight="bold">€600.00</text>
    <rect x="720" y="165" width="70" height="22" rx="4" fill="#FEE2E2"/>
    <text x="735" y="180" fill="#BE123C" font-family="sans-serif" font-size="11" font-weight="bold">Échoué</text>
    <text x="890" y="180" fill="#BE123C" font-family="sans-serif" font-size="12" font-weight="bold">Accès suspendu • Relancée</text>
  </g>
</svg>`;

// Save all 10 assets
saveAsset('Suivi client vue 1', svgSc1);
saveAsset('Suivi Client vue 2', svgSc2);
saveAsset('Suivi client vue 3', svgSc3);
saveAsset('Suivi tâches vue 1', svgSt1);
saveAsset('Suivi tâches vue 2', svgSt2);
saveAsset('Boite mail vue 1', svgEs1);
saveAsset('Exemple email vue 2', svgEs2);
saveAsset('Exemple email vue 3', svgEs3);
saveAsset('Suivi paiement vue 1', svgSp1);
saveAsset('Suivi paiement vue 2', svgSp2);

console.log('All 10 project visual assets generated successfully in public/');

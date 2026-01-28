Verwendete Tabellen:

V0IM0001

V0RK_D_AKT_GESCHAEFTSPARTNER

V0RK_D_AKT_HGP

V0RK_D_AKT_RISIKOEINHEIT

V0RK_D_COVENANTTRACKER

V0RK_D_DENORM_GP

V0RK_D_FRUEHWARNSIGNALE

V0RK_D_GESCHAEFTSPARTNER

V0RK_D_HAUPTGESCHAEFTSPARTNER

V0RK_D_LAND

V0RK_D_LOOKUP_HGP_RE_LISTE

V0RK_D_RATINGENTWICKLUNG

V0RK_D_RE_ZU_HGP

V0RK_D_RISIKOEINHEIT

V0RK_D_SL000004_AKT

V0RK_D_SL000156_AKT

V0RK_D_SL000165_AKT

V0RK_D_SL000373_AKT

V0RK_D_SL000418_AKT

V0RK_D_SL000888_AKT

V0RK_D_SL001009_AKT

V0RK_D_SL001023_AKT

V0RK_D_SL001257_AKT

V0RK_D_SL001345_AKT

V0RK_D_SL001356_AKT

V0RK_D_SL001358_AKT

V0RK_D_SL001359_AKT

V0RK_D_SL001360_AKT

V0RK_D_SL001749_AKT

V0RK_D_SL001922_AKT

V0RK_D_SL002195_AKT

V0RK_D_SL002219_AKT

V0RK_D_SL002398_AKT

V0RK_D_SL002489_AKT

V0RK_D_SL003194_AKT

V0RK_D_SL003684_AKT

V0RK_D_SL003995_AKT

V0RK_D_SL004351_AKT

V0RK_D_SL004774_AKT

V0RK_D_SL004821_AKT

V0RK_D_SL005336_AKT

V0RK_D_SL005337_AKT

V0RK_D_SL005389_AKT

V0RK_D_SL005604_AKT

V0RK_D_SL006042_AKT

V0RK_D_SL006369_AKT

V0RK_D_SL006938_AKT

V0RK_D_SL007005_AKT

V0RK_D_SL007006_AKT

V0RK_D_SL007007_AKT

V0RK_D_SL007060_AKT

V0RK_D_SL007061_AKT

V0RK_D_SL007321_AKT

 

 

SQL-Anweisungen:

select  distinct a11.CT_OBJEKT_ID  HGP_CT_OBJEKT_ID,

                a11.CT_TYP_SL  HGP_CT_TYP_SL,

                a11.VSTAG_NR  VSTAG_NR,

                a11.CT_VB_VARIANTE_ID  CT_VB_VARIANTE_ID,

                a11.CT_ABTEILUNG_SL  CT_ABTEILUNG_SL,

                a113.KURZTEXT  KURZTEXT,

                a11.CT_COVENANTART_SL  CT_COVENANTART_SL,

                a114.LANGTEXT  LANGTEXT0,

                a11.CT_COVENANT_TEXT_TX  CT_COVENANT_TEXT_TX,

                a11.CT_COVENANT_ID  CT_COVENANT_ID,

                a11.CT_EREIGNIS_SL  CT_EREIGNIS_SL,

                a115.LANGTEXT  LANGTEXT1,

                a11.CT_EREIGNIS_DATUM_ZEIT_ID  CT_EREIGNIS_DATUM_ZEIT_ID,

                a116.DATUM_TEXT  DATUM_TEXT,

                a11.CT_PRUEFUNG_ID  CT_PRUEFUNG_ID,

                a11.CT_VARIANTE_TEXT_TX  CT_VARIANTE_TEXT_TX,

                a11.CT_VARIANTE_ID  CT_VARIANTE_ID,

                a11.CT_GUID_LT  CT_GUID_LT,

                a11.CT_ERG_KFE_SONSTIGES_TX  CT_ERG_KFE_SONSTIGES_TX,

                a11.CT_KV_NUMMER_ID  CT_KV_NUMMER_ID,

                a11.CT_PARENT_GUID_LT  CT_PARENT_GUID_LT,

                a11.CT_RV_NUMMER_ID  CT_RV_NUMMER_ID,

                a11.CT_JR_VORGANG_ID  CT_JR_VORGANG_ID,

                a11.CT_WERT_FC_TX  CT_WERT_FC_TX,

                a17.FWS_EINTRITTSDATUM_ZEIT_ID  FWS_EINTRITTSDATUM_ZEIT_ID,

                a149.DATUM_TEXT  DATUM_TEXT0,

                a17.FWS_EREIGNIS_SL  FWS_EREIGNIS_SL,

                a1124.KURZTEXT  KURZTEXT2,

                a14.HGP_FWS_CORPORATE_OBJEKT_ID  FWS_CORPORATE_OBJEKT_ID,

                a14.HGP_FWS_CORPORATE_TYP_SL  FWS_CORPORATE_TYP_SL,

                a14.VSTAG_NR  VSTAG_NR0,

                a17.FWS_TYP_SL  FWS_TYP_SL,

                a150.KURZTEXT  KURZTEXT3,

                a17.FWS_GUID_LT  FWS_GUID_LT,

                a17.FWS_KATEGORIE_SL  FWS_KATEGORIE_SL,

                a151.KURZTEXT  KURZTEXT4,

                a17.FWS_SPEICHERDATUM_ZEIT_ID  FWS_SPEICHERDATUM_ZEIT_ID,

                a152.DATUM_TEXT  DATUM_TEXT1,

                a17.FWS_JR_VORGANG_ID  FWS_JR_VORGANG_ID,

                a17.FWS_WERTUNG_SL  FWS_WERTUNG_SL,

                a153.KURZTEXT  KURZTEXT5,

                a18.LAND_SL  LAND_SL,

                a154.KURZTEXT  KURZTEXT6,

                a14.GP_LAND_SL  LAND_SL0,

                a14.VSTAG_NR  VSTAG_NR1,

                a18.IMPERIUM_SL  IMPERIUM_SL,

                a1125.KURZTEXT  KURZTEXT7,

                a18.KONTINENT_SL  KONTINENT_SL,

                a1132.KURZTEXT  KURZTEXT8,

                a18.KONTINENT_SL  KONTINENT_SL0,

                a18.VSTAG_NR  VSTAG_NR2,

                a18.REGION_SL  REGION_SL,

                a1133.KURZTEXT  KURZTEXT9,

                a18.REGION_SL  REGION_SL0,

                a18.VSTAG_NR  VSTAG_NR3,

                a18.IMPERIUM_SL  IMPERIUM_SL0,

                a18.VSTAG_NR  VSTAG_NR4,

                a12.AUSPRID  AUSPRID,

                a12.KURZTEXT  KURZTEXT10,

                a13.AUSPRID  NACE1993_SL,

                a13.KURZTEXT  KURZTEXT11,

                a14.GP_NACE2008_SL  AUSPRID0,

                a117.KURZTEXT  KURZTEXT12,

                a14.GP_FINANCIAL_ENTITY_JN_SL  FINANCIAL_ENTITY_JN_SL,

                a118.KURZTEXT  KURZTEXT13,

                a14.GP_ID  GP_ID,

                a14.GP_TYP_SL  GP_TYP_SL,

                a119.GPNAME_LT  GPNAME_LT,

                a14.GP_ID  GP_ID0,

                a14.GP_TYP_SL  GP_TYP_SL0,

                a14.VSTAG_NR  VSTAG_NR5,

                a14.GP_RECHTSFORM_SL  AUSPRID1,

                a120.LANGTEXT  LANGTEXT14,

                a14.GP_RISIKOBRANCHE_SL  AUSPRID2,

                a121.KURZTEXT  KURZTEXT15,

                a19.AKT_FITCH_RATINGERG_SL  AUSPRID3,

                a155.KURZTEXT  KURZTEXT16,

                a19.JHRSND_FITCH_RATINGERG_SL  AUSPRID4,

                a156.KURZTEXT  KURZTEXT17,

                a19.VRGNG_FITCH_RATINGERG_SL  AUSPRID5,

                a157.KURZTEXT  KURZTEXT18,

                a19.VRJHR_FITCH_RATINGERG_SL  AUSPRID6,

                a158.KURZTEXT  KURZTEXT19,

                a19.VRMNT_FITCH_RATINGERG_SL  AUSPRID7,

                a159.KURZTEXT  KURZTEXT20,

                a19.VRQRTL_FITCH_RATINGERG_SL  AUSPRID8,

                a160.KURZTEXT  KURZTEXT21,

                a19.AKT_FITCH_RATING_ZEIT_ID  AKT_FITCH_RATING_ZEIT_ID,

                a161.DATUM_TEXT  DATUM_TEXT2,

                a19.VRGNG_FITCH_RATING_ZEIT_ID  VRGNG_FITCH_RATING_ZEIT_ID,

                a162.DATUM_TEXT  DATUM_TEXT3,

                a19.VRJHR_FITCH_RATING_ZEIT_ID  VRJHR_FITCH_RATING_ZEIT_ID,

                a163.DATUM_TEXT  DATUM_TEXT4,

                a19.AKT_MOODYS_RATINGERG_SL  AUSPRID9,

                a164.KURZTEXT  KURZTEXT22,

                a19.JHRSND_MOODYS_RATINGERG_SL  AUSPRID10,

                a165.KURZTEXT  KURZTEXT23,

                a19.VRGNG_MOODYS_RATINGERG_SL  AUSPRID11,

                a166.KURZTEXT  KURZTEXT24,

                a19.VRJHR_MOODYS_RATINGERG_SL  AUSPRID12,

                a167.KURZTEXT  KURZTEXT25,

                a19.VRMNT_MOODYS_RATINGERG_SL  AUSPRID13,

                a168.KURZTEXT  KURZTEXT26,

                a19.VRQRTL_MOODYS_RATINGERG_SL  AUSPRID14,

                a169.KURZTEXT  KURZTEXT27,

                a19.AKT_MOODYS_RATING_ZEIT_ID  AKT_MOODYS_RATING_ZEIT_ID,

                a170.DATUM_TEXT  DATUM_TEXT5,

                a19.VRGNG_MOODYS_RATING_ZEIT_ID  VRGNG_MOODYS_RATING_ZEIT_ID,

                a171.DATUM_TEXT  DATUM_TEXT6,

                a19.VRJHR_MOODYS_RATING_ZEIT_ID  VRJHR_MOODYS_RATING_ZEIT_ID,

                a172.DATUM_TEXT  DATUM_TEXT7,

                a19.AKT_EXT_RATING_ID  AKT_EXT_RATING_ID,

                a19.VRJHR_EXT_RATING_ID  VRJHR_EXT_RATING_ID,

                a19.VRGNG_EXT_RATING_ID  VRGNG_EXT_RATING_ID,

                a19.VRJHR_EXT_RATING_ID  VRJHR_EXT_RATING_ID0,

                a19.VRMNT_EXT_RATING_ID  VRMNT_EXT_RATING_ID,

                a19.VRQRTL_EXT_RATING_ID  VRQRTL_EXT_RATING_ID,

                a19.AKT_SP_RATINGERG_SL  AUSPRID15,

                a173.KURZTEXT  KURZTEXT28,

                a19.JHRSND_SP_RATINGERG_SL  AUSPRID16,

                a174.KURZTEXT  KURZTEXT29,

                a19.VRGNG_SP_RATINGERG_SL  AUSPRID17,

                a175.KURZTEXT  KURZTEXT30,

                a19.VRJHR_SP_RATINGERG_SL  AUSPRID18,

                a176.KURZTEXT  KURZTEXT31,

                a19.VRMNT_SP_RATINGERG_SL  AUSPRID19,

                a177.KURZTEXT  KURZTEXT32,

                a19.VRQRTL_SP_RATINGERG_SL  AUSPRID20,

                a178.KURZTEXT  KURZTEXT33,

                a19.AKT_SP_RATING_ZEIT_ID  AKT_SP_RATING_ZEIT_ID,

                a179.DATUM_TEXT  DATUM_TEXT8,

                a19.VRGNG_SP_RATING_ZEIT_ID  VRGNG_SP_RATING_ZEIT_ID,

                a180.DATUM_TEXT  DATUM_TEXT9,

                a19.VRJHR_SP_RATING_ZEIT_ID  VRJHR_SP_RATING_ZEIT_ID,

                a181.DATUM_TEXT  DATUM_TEXT10,

                a19.AUSFALLGRUND_SL  AUSPRID21,

                a182.KURZTEXT  KURZTEXT34,

                a19.AKT_INT_FC_RATINGERG_SL  AUSPRID22,

                a183.KURZTEXT  KURZTEXT35,

                a19.AKT_INT_PD_FC_RATINGERG_QT  AKT_INT_PD_FC_RATINGERG_QT,

                a19.JHRSND_INT_FC_RATINGERG_SL  AUSPRID23,

                a184.KURZTEXT  KURZTEXT36,

                a19.VRGNG_INT_FC_RATINGERG_SL  AUSPRID24,

                a185.KURZTEXT  KURZTEXT37,

                a19.VRJHR_INT_FC_RATINGERG_SL  AUSPRID25,

                a186.KURZTEXT  KURZTEXT38,

                a19.VRMNT_INT_FC_RATINGERG_SL  AUSPRID26,

                a187.KURZTEXT  KURZTEXT39,

                a19.VRQRTL_INT_FC_RATINGERG_SL  AUSPRID27,

                a188.KURZTEXT  KURZTEXT40,

                a19.AKT_INT_GSV_TYP_SL  AKT_INT_GSV_TYP_SL,

                a189.KURZTEXT  KURZTEXT41,

                a19.AKT_INT_RATINGERG_SL  AUSPRID28,

                a190.KURZTEXT  KURZTEXT42,

                a19.AKT_INT_PD_RATINGERG_QT  AKT_INT_PD_RATINGERG_QT,

                a19.JHRSND_INT_RATINGERG_SL  AUSPRID29,

                a191.KURZTEXT  KURZTEXT43,

                a19.VRGNG_INT_RATINGERG_SL  AUSPRID30,

                a192.KURZTEXT  KURZTEXT44,

                a19.VRJHR_INT_RATINGERG_SL  AUSPRID31,

                a193.KURZTEXT  KURZTEXT45,

                a19.VRMNT_INT_RATINGERG_SL  AUSPRID32,

                a194.KURZTEXT  KURZTEXT46,

                a19.VRQRTL_INT_RATINGERG_SL  AUSPRID33,

                a195.KURZTEXT  KURZTEXT47,

                a19.AKT_INT_NEGATIVSEGMENT_SL  AUSPRID34,

                a196.KURZTEXT  KURZTEXT48,

                a19.AKT_INT_NEGATIVSEG_GRUND_SL  AUSPRID35,

                a197.KURZTEXT  KURZTEXT49,

                a19.JHRSND_INT_NEGATIVSEG_GRUND_SL  AUSPRID36,

                a198.KURZTEXT  KURZTEXT50,

                a19.VRGNG_INT_NEGATIVSEG_GRUND_SL  AUSPRID37,

                a199.KURZTEXT  KURZTEXT51,

                a19.VRJHR_INT_NEGATIVSEG_GRUND_SL  AUSPRID38,

                a1100.KURZTEXT  KURZTEXT52,

                a19.VRMNT_INT_NEGATIVSEG_GRUND_SL  AUSPRID39,

                a1101.KURZTEXT  KURZTEXT53,

                a19.VRQRTL_INT_NEGATIVSEG_GRUND_SL  AUSPRID40,

                a1102.KURZTEXT  KURZTEXT54,

                a19.JHRSND_INT_NEGATIVSEGMENT_SL  AUSPRID41,

                a1103.KURZTEXT  KURZTEXT55,

                a19.VRGNG_INT_NEGATIVSEGMENT_SL  AUSPRID42,

                a1104.KURZTEXT  KURZTEXT56,

                a19.VRJHR_INT_NEGATIVSEGMENT_SL  AUSPRID43,

                a1105.KURZTEXT  KURZTEXT57,

                a19.VRMNT_INT_NEGATIVSEGMENT_SL  AUSPRID44,

                a1106.KURZTEXT  KURZTEXT58,

                a19.VRQRTL_INT_NEGATIVSEGMENT_SL  AUSPRID45,

                a1107.KURZTEXT  KURZTEXT59,

                a14.HGP_RATING_OBJEKT_ID  RATING_OBJEKT_ID,

                a14.HGP_RATING_ENTITY_ID_SL  RATING_ENTITY_ID_SL,

                a14.VSTAG_NR  VSTAG_NR6,

                a19.AKT_INT_FREIGABE_ZEIT_ID  AKT_INT_FREIGABE_ZEIT_ID,

                a1108.DATUM_TEXT  DATUM_TEXT11,

                a19.VRGNG_INT_FREIGABE_ZEIT_ID  VRGNG_INT_FREIGABE_ZEIT_ID,

                a1109.DATUM_TEXT  DATUM_TEXT12,

                a19.VRJHR_INT_FREIGABE_ZEIT_ID  VRJHR_INT_FREIGABE_ZEIT_ID,

                a1110.DATUM_TEXT  DATUM_TEXT13,

                a19.AKT_INT_NPL_ZEIT_ID  AKT_INT_NPL_ZEIT_ID,

                a1111.DATUM_TEXT  DATUM_TEXT14,

                a19.AKT_INT_RATINGALTER_MON_N  AKT_INT_RATINGALTER_MON_N,

                a19.VRGNG_INT_RATINGALTER_MON_N  VRGNG_INT_RATINGALTER_MON_N,

                a19.VRJHR_INT_RATINGALTER_MON_N  VRJHR_INT_RATINGALTER_MON_N,

                a19.AKT_INT_RATINGALTER_TAG_N  AKT_INT_RATINGALTER_TAG_N,

                a19.VRGNG_INT_RATINGALTER_TAG_N  VRGNG_INT_RATINGALTER_TAG_N,

                a19.VRJHR_INT_RATINGALTER_TAG_N  VRJHR_INT_RATINGALTER_TAG_N,

                a19.AKT_INT_RATINGCLUSTER_SOLVV_SL  AUSPRID46,

                a1112.KURZTEXT  KURZTEXT60,

                a1112.LANGTEXT  LANGTEXT60,

                a19.AKT_INT_RATING_ID  AKT_INT_RATING_ID,

                a19.JHRSND_INT_RATING_ID  JHRSND_INT_RATING_ID,

                a19.VRGNG_INT_RATING_ID  VRGNG_INT_RATING_ID,

                a19.VRJHR_INT_RATING_ID  VRJHR_INT_RATING_ID,

                a19.VRMNT_INT_RATING_ID  VRMNT_INT_RATING_ID,

                a19.VRQRTL_INT_RATING_ID  VRQRTL_INT_RATING_ID,

                a19.AKT_INT_RATINGVERFAHREN_SL  AUSPRID47,

                a1113.KURZTEXT  KURZTEXT61,

                a19.VRGNG_INT_RATINGVERFAHREN_SL  AUSPRID48,

                a1114.KURZTEXT  KURZTEXT62,

                a19.VRJHR_INT_RATINGVERFAHREN_SL  AUSPRID49,

                a1115.KURZTEXT  KURZTEXT63,

                a19.AKT_INT_TRANS_RATINGERG_SL  AUSPRID50,

                a1116.KURZTEXT  KURZTEXT64,

                a19.JHRSND_INT_TRANS_RATINGERG_SL  AUSPRID51,

                a1117.KURZTEXT  KURZTEXT65,

                a19.VRGNG_INT_TRANS_RATINGERG_SL  AUSPRID52,

                a1118.KURZTEXT  KURZTEXT66,

                a19.VRJHR_INT_TRANS_RATINGERG_SL  AUSPRID53,

                a1119.KURZTEXT  KURZTEXT67,

                a19.VRMNT_INT_TRANS_RATINGERG_SL  AUSPRID54,

                a1120.KURZTEXT  KURZTEXT68,

                a19.VRQRTL_INT_TRANS_RATINGERG_SL  AUSPRID55,

                a1121.KURZTEXT  KURZTEXT69,

                a110.LAND_SL  LAND_SL1,

                a1122.KURZTEXT  KURZTEXT70,

                a14.HAUPTADR_LAND_SL  LAND_SL2,

                a14.VSTAG_NR  VSTAG_NR7,

                a110.IMPERIUM_SL  IMPERIUM_SL1,

                a1126.KURZTEXT  KURZTEXT71,

                a110.KONTINENT_SL  KONTINENT_SL1,

                a1134.KURZTEXT  KURZTEXT72,

                a110.KONTINENT_SL  KONTINENT_SL2,

                a110.VSTAG_NR  VSTAG_NR8,

                a110.REGION_SL  REGION_SL1,

                a1135.KURZTEXT  KURZTEXT73,

                a110.REGION_SL  REGION_SL2,

                a110.VSTAG_NR  VSTAG_NR9,

                a110.IMPERIUM_SL  IMPERIUM_SL2,

                a110.VSTAG_NR  VSTAG_NR10,

                a14.HGP_ADSCR_KT  ADSCR_KT,

                a14.HGP_ID  HGP_ID,

                a14.HGP_TYP_SL  HGP_TYP_SL,

                a14.VSTAG_NR  VSTAG_NR11,

                a122.LISTE_RISIKOEINHEITEN_TX  LISTE_RISIKOEINHEITEN_TX,

                a14.HGP_ID  HGP_ID0,

                a14.HGP_TYP_SL  HGP_TYP_SL0,

                a14.VSTAG_NR  VSTAG_NR12,

                a14.HAUPTADR_NACE1993_SL  AUSPRID56,

                a123.KURZTEXT  KURZTEXT74,

                a14.GP_NACE2008_SL  AUSPRID57,

                a124.KURZTEXT  KURZTEXT75,

                a14.HAUPTADR_BRANCHENCLUSTER_SL  AUSPRID58,

                a125.KURZTEXT  KURZTEXT76,

                a14.HAUPTADR_BRANCHENSEGMENT_SL  AUSPRID59,

                a126.KURZTEXT  KURZTEXT77,

                a14.HGP_EBA_GLOAM_RELEVANZ_JN_SL  EBA_GLOAM_RELEVANZ_JN_SL,

                a127.KURZTEXT  KURZTEXT78,

                a14.GP_FINANCIAL_ENTITY_JN_SL  HAUPTADR_FINANCIAL_ENT_JN_SL,

                a128.KURZTEXT  KURZTEXT79,

                a16.HAUPTADR_GP_ID  GP_ID1,

                a16.HAUPTADR_GP_TYP_SL  GP_TYP_SL1,

                a16.VSTAG_NR  VSTAG_NR13,

                a14.HGP_ID  HGP_ID1,

                a14.HGP_TYP_SL  HGP_TYP_SL1,

                a129.HGP_NAME_LT  GPNAME_LT0,

                a129.HGP_TYP_KT  HGP_TYP_KT,

                a14.HGP_ID  HGP_ID2,

                a14.HGP_TYP_SL  HGP_TYP_SL2,

                a14.VSTAG_NR  VSTAG_NR14,

                a129.HGP_NAME_LT  GPNAME_LT1,

                a129.HGP_TYP_KT  HGP_TYP_KT0,

                a14.HAUPTADR_GP_ID  HGP_ID3,

                a14.HAUPTADR_GP_TYP_SL  HGP_TYP_SL3,

                a14.VSTAG_NR  VSTAG_NR15,

                a14.HGP_INTENSIVBETREUUNG_KENNZ_SL  AUSPRID60,

                a130.KURZTEXT  KURZTEXT80,

                a14.HGP_KMU_KENNZ_SL  AUSPRID61,

                a131.KURZTEXT  KURZTEXT81,

                a14.HAUPTADR_KINST_BIL_SICHT_JN_SL  AUSPRID62,

                a132.KURZTEXT  KURZTEXT82,

                a14.HGP_LEVERAGED_TRANSACT_JN_SL  LEVERAGED_TRANSACT_JN_SL,

                a133.KURZTEXT  KURZTEXT83,

                a14.HGP_LEVE_TRANSACT_HOEHENCL_SL  LEVERAGED_TRANSACT_HOEHENCL_SL,

                a134.KURZTEXT  KURZTEXT84,

                a14.HGP_RATINGZUSTAENDIGKEIT_SL  AUSPRID63,

 

                a136.KURZTEXT  KURZTEXT85,

                a14.HAUPTADR_RECHTSFORM_SL  AUSPRID64,

                a137.LANGTEXT  LANGTEXT86,

                a14.HGP_RETAILKENNZEICHEN_SL  RETAILKENNZEICHEN_SL,

                a138.KURZTEXT  KURZTEXT87,

                a14.HGP_RISIKOBRANCHE_SL  AUSPRID65,

                a139.KURZTEXT  KURZTEXT88,

                a14.HGP_RK_STATUS_SL  AUSPRID66,

                a135.KURZTEXT  KURZTEXT89,

                a14.HGP_SCHATTENBANK_SL  AUSPRID67,

                a140.KURZTEXT  KURZTEXT90,

                a14.HGP_SCHATTENBANK_GVON_ZEIT_ID  SCHATTENBANK_GUELTVON_ZEIT_ID,

                a141.DATUM_TEXT  DATUM_TEXT15,

                a14.HGP_SEKTOR_INTERN_SL  AUSPRID68,

                a142.KURZTEXT  KURZTEXT91,

                a14.HGP_STAATLICH_JN_SL  AUSPRID69,

                a143.KURZTEXT  KURZTEXT92,

                a14.HGP_STRUKTUR_EINHEIT_JN_SL  AUSPRID70,

                a144.KURZTEXT  KURZTEXT93,

                a14.HGP_TOP_KUNDE_JN_SL  AUSPRID71,

                a145.KURZTEXT  KURZTEXT94,

                a14.HGP_TYP_SL  AUSPRID72,

                a146.KURZTEXT  KURZTEXT95,

                a14.HGP_YL_KENNZ_SL  AUSPRID73,

                a147.KURZTEXT  KURZTEXT96,

                a14.HGP_ZENTR_KONTRAHENT_KENNZ_SL  AUSPRID74,

                a148.KURZTEXT  KURZTEXT97,

                a112.BEH_HGP_ID  BEH_HGP_ID,

                a111.BEHERRSCHEND_SL  AUSPRID75,

                a1127.KURZTEXT  KURZTEXT98,

                a112.BUNDESBANK_KRNEHMER_ID  BUNDESBANK_KRNEHMER_ID,

                a112.HDP_KENNZ_JN_SL  AUSPRID76,

                a1128.KURZTEXT  KURZTEXT99,

                a112.HVP_KENNZ_JN_SL  AUSPRID77,

                a1129.KURZTEXT  KURZTEXT100,

                a111.RE_ID  RE_ID,

                a111.RE_TYP_SL  RE_TYP_SL,

                a1123.RE_NAME_LT  RE_NAME_LT,

                a1123.RE_TYP_KT  RE_TYP_KT,

                a111.RE_ID  RE_ID0,

                a111.RE_TYP_SL  RE_TYP_SL0,

                a111.VSTAG_NR  VSTAG_NR16,

                a1123.RE_NAME_LT  RE_NAME_LT0,

                a1123.RE_TYP_KT  RE_TYP_KT0,

                a112.RE_ART_SL  AUSPRID78,

                a1130.KURZTEXT  KURZTEXT101,

                a111.RE_TYP_SL  AUSPRID79,

                a1131.KURZTEXT  KURZTEXT102

from     V0RK_D_COVENANTTRACKER              a11

                cross join           V0RK_D_SL001009_AKT            a12

                cross join           V0RK_D_SL000373_AKT            a13

                join        V0RK_D_DENORM_GP              a14

                  on        (a11.CT_OBJEKT_ID = a14.HGP_CT_OBJEKT_ID and

                a11.CT_TYP_SL = a14.HGP_CT_TYP_SL and

                a11.VSTAG_NR = a14.VSTAG_NR)

                join        V0RK_D_HAUPTGESCHAEFTSPARTNER           a16

                  on        (a11.VSTAG_NR = a16.VSTAG_NR)

                join        V0RK_D_FRUEHWARNSIGNALE           a17

                  on        (a11.VSTAG_NR = a17.VSTAG_NR and

                a14.HGP_FWS_CORPORATE_OBJEKT_ID = a17.FWS_OBJEKT_ID and

                a14.HGP_FWS_CORPORATE_TYP_SL = a17.FWS_TYP_SL and

                a14.VSTAG_NR = a17.VSTAG_NR)

                join        V0RK_D_LAND a18

                  on        (a11.VSTAG_NR = a18.VSTAG_NR and

                a14.GP_LAND_SL = a18.LAND_SL and

                a14.VSTAG_NR = a18.VSTAG_NR)

                join        V0RK_D_RATINGENTWICKLUNG          a19

                  on        (a11.VSTAG_NR = a19.VSTAG_NR and

                a14.HGP_RATING_ENTITY_ID_SL = a19.RATING_ENTITY_ID_SL and

                a14.HGP_RATING_OBJEKT_ID = a19.RATING_OBJEKT_ID and

                a14.VSTAG_NR = a19.VSTAG_NR)

                join        V0RK_D_LAND a110

                  on        (a11.VSTAG_NR = a110.VSTAG_NR and

                a14.HAUPTADR_LAND_SL = a110.LAND_SL and

                a14.VSTAG_NR = a110.VSTAG_NR)

                join        V0RK_D_RE_ZU_HGP  a111

                  on        (a11.VSTAG_NR = a111.VSTAG_NR and

                a14.HGP_ID = a111.HGP_ID and

                a14.HGP_TYP_SL = a111.HGP_TYP_SL and

                a14.VSTAG_NR = a111.VSTAG_NR)

                join        V0RK_D_RISIKOEINHEIT           a112

                  on        (a11.VSTAG_NR = a112.VSTAG_NR and

                a111.RE_ID = a112.RE_ID and

                a111.RE_TYP_SL = a112.RE_TYP_SL and

                a111.VSTAG_NR = a112.VSTAG_NR)

                join        V0RK_D_SL007321_AKT            a113

                  on        (a11.CT_ABTEILUNG_SL = a113.AUSPRID)

                join        V0RK_D_SL007061_AKT            a114

                  on        (a11.CT_COVENANTART_SL = a114.AUSPRID)

                join        V0RK_D_SL007060_AKT            a115

                  on        (a11.CT_EREIGNIS_SL = a115.AUSPRID)

                join        V0IM0001          a116

                  on        (a11.CT_EREIGNIS_DATUM_ZEIT_ID = a116.ZEIT_ID)

                join        V0RK_D_SL003684_AKT            a117

                  on        (a14.GP_NACE2008_SL = a117.AUSPRID)

                join        V0RK_D_SL000418_AKT            a118

                  on        (a14.GP_FINANCIAL_ENTITY_JN_SL = a118.AUSPRID)

                join        V0RK_D_AKT_GESCHAEFTSPARTNER a119

                  on        (a14.GP_ID = a119.GP_ID and

                a14.GP_TYP_SL = a119.GP_TYP_SL)

                join        V0RK_D_SL000004_AKT            a120

                  on        (a14.GP_RECHTSFORM_SL = a120.AUSPRID)

                join        V0RK_D_SL005604_AKT            a121

                  on        (a14.GP_RISIKOBRANCHE_SL = a121.AUSPRID)

                join        V0RK_D_LOOKUP_HGP_RE_LISTE       a122

                  on        (a14.HGP_ID = a122.HGP_ID and

                a14.HGP_TYP_SL = a122.HGP_TYP_SL and

                a14.VSTAG_NR = a122.VSTAG_NR)

                join        V0RK_D_SL000373_AKT            a123

                  on        (a14.HAUPTADR_NACE1993_SL = a123.AUSPRID)

                join        V0RK_D_SL003684_AKT            a124

                  on        (a14.GP_NACE2008_SL = a124.AUSPRID)

                join        V0RK_D_SL004821_AKT            a125

                  on        (a14.HAUPTADR_BRANCHENCLUSTER_SL = a125.AUSPRID)

                join        V0RK_D_SL002195_AKT            a126

                  on        (a14.HAUPTADR_BRANCHENSEGMENT_SL = a126.AUSPRID)

                join        V0RK_D_SL000418_AKT            a127

                  on        (a14.HGP_EBA_GLOAM_RELEVANZ_JN_SL = a127.AUSPRID)

                join        V0RK_D_SL000418_AKT            a128

                  on        (a14.GP_FINANCIAL_ENTITY_JN_SL = a128.AUSPRID)

                join        V0RK_D_AKT_HGP       a129

                  on        (a14.HGP_ID = a129.HGP_ID and

                a14.HGP_TYP_SL = a129.HGP_TYP_SL)

                join        V0RK_D_SL003995_AKT            a130

                  on        (a14.HGP_INTENSIVBETREUUNG_KENNZ_SL = a130.AUSPRID)

                join        V0RK_D_SL005389_AKT            a131

                  on        (a14.HGP_KMU_KENNZ_SL = a131.AUSPRID)

                join        V0RK_D_SL000418_AKT            a132

                  on        (a14.HAUPTADR_KINST_BIL_SICHT_JN_SL = a132.AUSPRID)

                join        V0RK_D_SL000418_AKT            a133

                  on        (a14.HGP_LEVERAGED_TRANSACT_JN_SL = a133.AUSPRID)

                join        V0RK_D_SL006938_AKT            a134

                  on        (a14.HGP_LEVE_TRANSACT_HOEHENCL_SL = a134.AUSPRID)

                join        V0RK_D_SL002398_AKT            a135

                  on        (a14.HGP_RK_STATUS_SL = a135.AUSPRID)

                join        V0RK_D_SL000165_AKT            a136

                  on        (a14.HGP_RATINGZUSTAENDIGKEIT_SL = a136.AUSPRID)

                join        V0RK_D_SL000004_AKT            a137

                  on        (a14.HAUPTADR_RECHTSFORM_SL = a137.AUSPRID)

                join        V0RK_D_SL000418_AKT            a138

                  on        (a14.HGP_RETAILKENNZEICHEN_SL = a138.AUSPRID)

                join        V0RK_D_SL005604_AKT            a139

                  on        (a14.HGP_RISIKOBRANCHE_SL = a139.AUSPRID)

                join        V0RK_D_SL006042_AKT            a140

                  on        (a14.HGP_SCHATTENBANK_SL = a140.AUSPRID)

                join        V0IM0001          a141

                  on        (a14.HGP_SCHATTENBANK_GVON_ZEIT_ID = a141.ZEIT_ID)

                join        V0RK_D_SL002489_AKT            a142

                  on        (a14.HGP_SEKTOR_INTERN_SL = a142.AUSPRID)

                join        V0RK_D_SL000418_AKT            a143

                  on        (a14.HGP_STAATLICH_JN_SL = a143.AUSPRID)

                join        V0RK_D_SL000418_AKT            a144

                  on        (a14.HGP_STRUKTUR_EINHEIT_JN_SL = a144.AUSPRID)

                join        V0RK_D_SL000418_AKT            a145

                  on        (a14.HGP_TOP_KUNDE_JN_SL = a145.AUSPRID)

                join        V0RK_D_SL006369_AKT            a146

                  on        (a14.HGP_TYP_SL = a146.AUSPRID)

                join        V0RK_D_SL004351_AKT            a147

                  on        (a14.HGP_YL_KENNZ_SL = a147.AUSPRID)

                join        V0RK_D_SL004774_AKT            a148

                  on        (a14.HGP_ZENTR_KONTRAHENT_KENNZ_SL = a148.AUSPRID)

                join        V0IM0001          a149

                  on        (a17.FWS_EINTRITTSDATUM_ZEIT_ID = a149.ZEIT_ID)

                join        V0RK_D_SL006369_AKT            a150

                  on        (a17.FWS_TYP_SL = a150.AUSPRID)

                join        V0RK_D_SL007005_AKT            a151

                  on        (a17.FWS_KATEGORIE_SL = a151.AUSPRID)

                join        V0IM0001          a152

                  on        (a17.FWS_SPEICHERDATUM_ZEIT_ID = a152.ZEIT_ID)

                join        V0RK_D_SL007007_AKT            a153

                  on        (a17.FWS_WERTUNG_SL = a153.AUSPRID)

                join        V0RK_D_SL000888_AKT            a154

                  on        (a18.LAND_SL = a154.AUSPRID)

                join        V0RK_D_SL001360_AKT            a155

                  on        (a19.AKT_FITCH_RATINGERG_SL = a155.AUSPRID)

                join        V0RK_D_SL001360_AKT            a156

                  on        (a19.JHRSND_FITCH_RATINGERG_SL = a156.AUSPRID)

                join        V0RK_D_SL001360_AKT            a157

                  on        (a19.VRGNG_FITCH_RATINGERG_SL = a157.AUSPRID)

                join        V0RK_D_SL001360_AKT            a158

                  on        (a19.VRJHR_FITCH_RATINGERG_SL = a158.AUSPRID)

                join        V0RK_D_SL001360_AKT            a159

                  on        (a19.VRMNT_FITCH_RATINGERG_SL = a159.AUSPRID)

                join        V0RK_D_SL001360_AKT            a160

                  on        (a19.VRQRTL_FITCH_RATINGERG_SL = a160.AUSPRID)

                join        V0IM0001          a161

                  on        (a19.AKT_FITCH_RATING_ZEIT_ID = a161.ZEIT_ID)

                join        V0IM0001          a162

                  on        (a19.VRGNG_FITCH_RATING_ZEIT_ID = a162.ZEIT_ID)

                join        V0IM0001          a163

                  on        (a19.VRJHR_FITCH_RATING_ZEIT_ID = a163.ZEIT_ID)

                join        V0RK_D_SL001359_AKT            a164

                  on        (a19.AKT_MOODYS_RATINGERG_SL = a164.AUSPRID)

                join        V0RK_D_SL001359_AKT            a165

                  on        (a19.JHRSND_MOODYS_RATINGERG_SL = a165.AUSPRID)

                join        V0RK_D_SL001359_AKT            a166

                  on        (a19.VRGNG_MOODYS_RATINGERG_SL = a166.AUSPRID)

                join        V0RK_D_SL001359_AKT            a167

                  on        (a19.VRJHR_MOODYS_RATINGERG_SL = a167.AUSPRID)

                join        V0RK_D_SL001359_AKT            a168

                  on        (a19.VRMNT_MOODYS_RATINGERG_SL = a168.AUSPRID)

                join        V0RK_D_SL001359_AKT            a169

                  on        (a19.VRQRTL_MOODYS_RATINGERG_SL = a169.AUSPRID)

                join        V0IM0001          a170

                  on        (a19.AKT_MOODYS_RATING_ZEIT_ID = a170.ZEIT_ID)

                join        V0IM0001          a171

                  on        (a19.VRGNG_MOODYS_RATING_ZEIT_ID = a171.ZEIT_ID)

                join        V0IM0001          a172

                  on        (a19.VRJHR_MOODYS_RATING_ZEIT_ID = a172.ZEIT_ID)

                join        V0RK_D_SL001358_AKT            a173

                  on        (a19.AKT_SP_RATINGERG_SL = a173.AUSPRID)

                join        V0RK_D_SL001358_AKT            a174

                  on        (a19.JHRSND_SP_RATINGERG_SL = a174.AUSPRID)

                join        V0RK_D_SL001358_AKT            a175

                  on        (a19.VRGNG_SP_RATINGERG_SL = a175.AUSPRID)

                join        V0RK_D_SL001358_AKT            a176

                  on        (a19.VRJHR_SP_RATINGERG_SL = a176.AUSPRID)

                join        V0RK_D_SL001358_AKT            a177

                  on        (a19.VRMNT_SP_RATINGERG_SL = a177.AUSPRID)

                join        V0RK_D_SL001358_AKT            a178

                  on        (a19.VRQRTL_SP_RATINGERG_SL = a178.AUSPRID)

                join        V0IM0001          a179

                  on        (a19.AKT_SP_RATING_ZEIT_ID = a179.ZEIT_ID)

                join        V0IM0001          a180

                  on        (a19.VRGNG_SP_RATING_ZEIT_ID = a180.ZEIT_ID)

                join        V0IM0001          a181

                  on        (a19.VRJHR_SP_RATING_ZEIT_ID = a181.ZEIT_ID)

                join        V0RK_D_SL001922_AKT            a182

                  on        (a19.AUSFALLGRUND_SL = a182.AUSPRID)

                join        V0RK_D_SL001356_AKT            a183

                  on        (a19.AKT_INT_FC_RATINGERG_SL = a183.AUSPRID)

                join        V0RK_D_SL001356_AKT            a184

                  on        (a19.JHRSND_INT_FC_RATINGERG_SL = a184.AUSPRID)

                join        V0RK_D_SL001356_AKT            a185

                  on        (a19.VRGNG_INT_FC_RATINGERG_SL = a185.AUSPRID)

                join        V0RK_D_SL001356_AKT            a186

                  on        (a19.VRJHR_INT_FC_RATINGERG_SL = a186.AUSPRID)

                join        V0RK_D_SL001356_AKT            a187

                  on        (a19.VRMNT_INT_FC_RATINGERG_SL = a187.AUSPRID)

                join        V0RK_D_SL001356_AKT            a188

                  on        (a19.VRQRTL_INT_FC_RATINGERG_SL = a188.AUSPRID)

                join        V0RK_D_SL000156_AKT            a189

                  on        (a19.AKT_INT_GSV_TYP_SL = a189.AUSPRID)

                join        V0RK_D_SL001356_AKT            a190

                  on        (a19.AKT_INT_RATINGERG_SL = a190.AUSPRID)

                join        V0RK_D_SL001356_AKT            a191

                  on        (a19.JHRSND_INT_RATINGERG_SL = a191.AUSPRID)

                join        V0RK_D_SL001356_AKT            a192

                  on        (a19.VRGNG_INT_RATINGERG_SL = a192.AUSPRID)

                join        V0RK_D_SL001356_AKT            a193

                  on        (a19.VRJHR_INT_RATINGERG_SL = a193.AUSPRID)

                join        V0RK_D_SL001356_AKT            a194

                  on        (a19.VRMNT_INT_RATINGERG_SL = a194.AUSPRID)

                join        V0RK_D_SL001356_AKT            a195

                  on        (a19.VRQRTL_INT_RATINGERG_SL = a195.AUSPRID)

                join        V0RK_D_SL005336_AKT            a196

                  on        (a19.AKT_INT_NEGATIVSEGMENT_SL = a196.AUSPRID)

                join        V0RK_D_SL005337_AKT            a197

                  on        (a19.AKT_INT_NEGATIVSEG_GRUND_SL = a197.AUSPRID)

                join        V0RK_D_SL005337_AKT            a198

                  on        (a19.JHRSND_INT_NEGATIVSEG_GRUND_SL = a198.AUSPRID)

                join        V0RK_D_SL005337_AKT            a199

                  on        (a19.VRGNG_INT_NEGATIVSEG_GRUND_SL = a199.AUSPRID)

                join        V0RK_D_SL005337_AKT            a1100

                  on        (a19.VRJHR_INT_NEGATIVSEG_GRUND_SL = a1100.AUSPRID)

                join        V0RK_D_SL005337_AKT            a1101

                  on        (a19.VRMNT_INT_NEGATIVSEG_GRUND_SL = a1101.AUSPRID)

                join        V0RK_D_SL005337_AKT            a1102

                  on        (a19.VRQRTL_INT_NEGATIVSEG_GRUND_SL = a1102.AUSPRID)

                join        V0RK_D_SL005336_AKT            a1103

                  on        (a19.JHRSND_INT_NEGATIVSEGMENT_SL = a1103.AUSPRID)

                join        V0RK_D_SL005336_AKT            a1104

                  on        (a19.VRGNG_INT_NEGATIVSEGMENT_SL = a1104.AUSPRID)

                join        V0RK_D_SL005336_AKT            a1105

                  on        (a19.VRJHR_INT_NEGATIVSEGMENT_SL = a1105.AUSPRID)

                join        V0RK_D_SL005336_AKT            a1106

                  on        (a19.VRMNT_INT_NEGATIVSEGMENT_SL = a1106.AUSPRID)

                join        V0RK_D_SL005336_AKT            a1107

                  on        (a19.VRQRTL_INT_NEGATIVSEGMENT_SL = a1107.AUSPRID)

                join        V0IM0001          a1108

                  on        (a19.AKT_INT_FREIGABE_ZEIT_ID = a1108.ZEIT_ID)

                join        V0IM0001          a1109

                  on        (a19.VRGNG_INT_FREIGABE_ZEIT_ID = a1109.ZEIT_ID)

                join        V0IM0001          a1110

                  on        (a19.VRJHR_INT_FREIGABE_ZEIT_ID = a1110.ZEIT_ID)

                join        V0IM0001          a1111

                  on        (a19.AKT_INT_NPL_ZEIT_ID = a1111.ZEIT_ID)

                join        V0RK_D_SL003194_AKT            a1112

                  on        (a19.AKT_INT_RATINGCLUSTER_SOLVV_SL = a1112.AUSPRID)

                join        V0RK_D_SL001345_AKT            a1113

                  on        (a19.AKT_INT_RATINGVERFAHREN_SL = a1113.AUSPRID)

                join        V0RK_D_SL001345_AKT            a1114

                  on        (a19.VRGNG_INT_RATINGVERFAHREN_SL = a1114.AUSPRID)

                join        V0RK_D_SL001345_AKT            a1115

                  on        (a19.VRJHR_INT_RATINGVERFAHREN_SL = a1115.AUSPRID)

                join        V0RK_D_SL002219_AKT            a1116

                  on        (a19.AKT_INT_TRANS_RATINGERG_SL = a1116.AUSPRID)

                join        V0RK_D_SL002219_AKT            a1117

                  on        (a19.JHRSND_INT_TRANS_RATINGERG_SL = a1117.AUSPRID)

                join        V0RK_D_SL002219_AKT            a1118

                  on        (a19.VRGNG_INT_TRANS_RATINGERG_SL = a1118.AUSPRID)

                join        V0RK_D_SL002219_AKT            a1119

                  on        (a19.VRJHR_INT_TRANS_RATINGERG_SL = a1119.AUSPRID)

                join        V0RK_D_SL002219_AKT            a1120

                  on        (a19.VRMNT_INT_TRANS_RATINGERG_SL = a1120.AUSPRID)

                join        V0RK_D_SL002219_AKT            a1121

                  on        (a19.VRQRTL_INT_TRANS_RATINGERG_SL = a1121.AUSPRID)

                join        V0RK_D_SL000888_AKT            a1122

                  on        (a110.LAND_SL = a1122.AUSPRID)

                join        V0RK_D_AKT_RISIKOEINHEIT a1123

                  on        (a111.RE_ID = a1123.RE_ID and

                a111.RE_TYP_SL = a1123.RE_TYP_SL)

                join        V0RK_D_SL007006_AKT            a1124

                  on        (a17.FWS_EREIGNIS_SL = a1124.AUSPRID)

                join        V0RK_D_SL000888_AKT            a1125

                  on        (a18.IMPERIUM_SL = a1125.AUSPRID)

                join        V0RK_D_SL000888_AKT            a1126

                  on        (a110.IMPERIUM_SL = a1126.AUSPRID)

                join        V0RK_D_SL000418_AKT            a1127

                  on        (a111.BEHERRSCHEND_SL = a1127.AUSPRID)

                join        V0RK_D_SL000418_AKT            a1128

                  on        (a112.HDP_KENNZ_JN_SL = a1128.AUSPRID)

                join        V0RK_D_SL000418_AKT            a1129

                  on        (a112.HVP_KENNZ_JN_SL = a1129.AUSPRID)

                join        V0RK_D_SL001257_AKT            a1130

                  on        (a112.RE_ART_SL = a1130.AUSPRID)

                join        V0RK_D_SL006369_AKT            a1131

                  on        (a111.RE_TYP_SL = a1131.AUSPRID)

                join        V0RK_D_SL001023_AKT            a1132

                  on        (a18.KONTINENT_SL = a1132.AUSPRID)

                join        V0RK_D_SL001749_AKT            a1133

                  on        (a18.REGION_SL = a1133.AUSPRID)

                join        V0RK_D_SL001023_AKT            a1134

                  on        (a110.KONTINENT_SL = a1134.AUSPRID)

                join        V0RK_D_SL001749_AKT            a1135

                  on        (a110.REGION_SL = a1135.AUSPRID)

 
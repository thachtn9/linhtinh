// Check kết nối db idc

// DWF
// BMS
// ShortLink
// NOC
// Table,Packages SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('FUNCTION','PROCEDURE','PACKAGE','TABLE') AND OWNER = 'IDC' ORDER BY OBJECT_TYPE DESC
var urlAPI = '';
var strProcess = '';
var inputDBA = {
    'Username': 'DBA',
    'Password': 'truongngocthach',
    "query": ""
};
var jsDB = JSON.parse('[{"CODE":"IDC_TABLE_INFODEVICE"},{"CODE":"IDC_TABLE_SHORTLINK"},{"CODE":"IDC_TABLE_CO_SALE"},{"CODE":"IDC_TABLE_OUU"},{"CODE":"IDC_TABLE_REGISTRATIONDETAIL"},{"CODE":"IDC_TABLE_AREADC"},{"CODE":"IDC_TABLE_LOCATIONDC"},{"CODE":"IDC_TABLE_DATACENTER"},{"CODE":"IDC_TABLE_DISTRICT"},{"CODE":"IDC_TABLE_STREET"},{"CODE":"IDC_TABLE_WARD"},{"CODE":"IDC_TABLE_SUBCOMPANY"},{"CODE":"IDC_TABLE_BRANCH"},{"CODE":"IDC_TABLE_CODEDETAIL"},{"CODE":"IDC_TABLE_REGISTRATION"},{"CODE":"IDC_TABLE_CONTRACT"},{"CODE":"IDC_TABLE_DEPLOY"},{"CODE":"IDC_TABLE_HISTORY_TRANSACTION"},{"CODE":"IDC_TABLE_LOCATION"},{"CODE":"IDC_TABLE_MAILCONTENT"},{"CODE":"IDC_TABLE_PROVINCE"},{"CODE":"IDC_TABLE_ROLE"},{"CODE":"IDC_TABLE_SUBCONTRACT"},{"CODE":"IDC_TABLE_SURVEY"},{"CODE":"IDC_TABLE_CONTRACT_AN"},{"CODE":"IDC_TABLE_IDCFUNTION"},{"CODE":"IDC_TABLE_REF_INSIDE_TECH"},{"CODE":"IDC_TABLE_REF_INSIDE_CUSTOMER"},{"CODE":"IDC_TABLE_REQUEST"},{"CODE":"IDC_TABLE_REQUESTDETAIL"},{"CODE":"IDC_TABLE_FILESYSTEM"},{"CODE":"IDC_TABLE_REQUESTTEMP"},{"CODE":"IDC_TABLE_UPGRADE"},{"CODE":"IDC_TABLE_RACK"},{"CODE":"IDC_TABLE_UPGRADE_CODE"},{"CODE":"IDC_TABLE_CONTRACT_LEGAL"},{"CODE":"IDC_TABLE_REPORT_DEPLOY"},{"CODE":"IDC_TABLE_DATABASECHANGELOG_ACTIONS"},{"CODE":"IDC_TABLE_DATABASECHANGELOGLOCK"},{"CODE":"IDC_TABLE_DATABASECHANGELOG"},{"CODE":"IDC_TABLE_MAILCONFIG"},{"CODE":"IDC_TABLE_SETTING"},{"CODE":"IDC_TABLE_SENDNOC"},{"CODE":"IDC_TABLE_SURVEYBMS"},{"CODE":"IDC_TABLE_REQUESTDW"},{"CODE":"IDC_TABLE_REQUESTDWDETAIL"},{"CODE":"IDC_TABLE_DWFDETAIL"},{"CODE":"IDC_TABLE_BMS"},{"CODE":"IDC_TABLE_NOC"},{"CODE":"IDC_TABLE_DWF"},{"CODE":"IDC_TABLE_RACKDETAIL"},{"CODE":"IDC_TABLE_HISTORY"},{"CODE":"IDC_TABLE_SERVICEDETAIL"},{"CODE":"IDC_TABLE_DEVICE"},{"CODE":"IDC_TABLE_SERVICETYPE"},{"CODE":"IDC_TABLE_SERCONTRACT"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_SURVEY_REPORT"},{"CODE":"IDC_PROCEDURE_DEPLOY_REPORT_MN"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_DEPLOY_REPORT"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_DISTRICT"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_WARD"},{"CODE":"IDC_PROCEDURE_SU8_IDC_STREET"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_LOCATIONCUSTOMER"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_CONTRACT_UPDATE_SALEMAIL_AN"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_CONTRACT_UPDATE_SALEID"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_CONTRACT_UPDATE_PROVINCEID"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_DEPLOY_LIST"},{"CODE":"IDC_PROCEDURE_REGISTRATION_LIST_TEST"},{"CODE":"IDC_PROCEDURE_GET_BRANCH_BY_SUBCOMPANYID"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_MATCHING_CUSTOMER"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_MATCHING_TECH"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_DEPLOY_INSIDE_IMPPORT"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_CUSTOMER_LIST"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_CUSTOMER_LIST_OK"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_GET_SUBCONTRACT_BY_CONTRACTNUMBER"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_CUSTOMER_LIST_NOTOK"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_UPDATE_JOB"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_SURVEY_UPDATESURVEYNOTOK"},{"CODE":"IDC_PROCEDURE_SU8_IDC_RE_CON_SUB_UPDATE_TAX"},{"CODE":"IDC_PROCEDURE_SU8_IDC_CONTRACT_LIST_SUBCONTRACTNUMBER"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_CONTRACT_UPDATE_SALEMAIL"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_CONTRACT_UPDATE_REFCONTRACTID"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_SUBCONTRACT_UPDATE_REFSUBCONTRACTID"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_SUBCONTRACT_GETLIST"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_REGDETAILLIST_BY_CONTRACTID_REQUESTTYPE"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_REGDETAILLIST_BY_CONTRACTID_STATUS"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_SUSPEND_INFODEVICE_INSERT"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_REGDETAILLIST_BY_CONTRACTID_AND_STATUS"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_REGDETAILLIST_BY_CONTRACTID_AND_RESSTATUS"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_FILESYSTEM"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_DEPLOY_REPORTDETAIL"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_SUSPEND_REQUESTTEMP_INSERT"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_SUSPEND_REQUESTTEMP_GET_BY_REQUESTID"},{"CODE":"IDC_PROCEDURE_SU8W_IDC_SERCONTRACT_LIST_BY_REQUESTID"},{"CODE":"IDC_PROCEDURE_SURVEY_REPORT_DETAIL_MN"},{"CODE":"IDC_PROCEDURE_SURVEY_REPORT_DETAIL_MN1"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_SURVEY_REPORT_DETAIL_V2"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_SURVEY_REPORT_DETAIL_V2_DANHDC4"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_SENDMAILV2"},{"CODE":"IDC_PROCEDURE_SU8R_IDC_CONTRACT_LIST"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_SERCONTRACT"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_RACK"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_MASTERDATA"},{"CODE":"IDC_PACKAGE_SU8_PGK_IDC_SURVEY"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_CONTRACT"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_REGISTRATION"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_DEPLOY"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_REGISTRATIONDETAIL"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_SUBCONTRACT"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_REQUEST"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_REQUESTDETAIL"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_FILESYSTEM"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_SUSPEND"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_REQUESTTEMP"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_HISTORY_TRANSACTION"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_RACK_OPERATIONS"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_CONTRACT_LEGAL"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_EXTEND"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_UPGRADE"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_SENDMAIL"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_SETTING"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_DWF"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_HISTORY"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_DWFDETAIL"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_BMS"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_DEVICE"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_NOC"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_ACCEPTANCE"},{"CODE":"IDC_PACKAGE_SU8_PKG_IDC_TEST"},{"CODE":"IDC_FUNCTION_DATEDIFF"},{"CODE":"IDC_FUNCTION_GENCODE_BARCODE"},{"CODE":"IDC_FUNCTION_GENCODE_CONTRACT"},{"CODE":"IDC_FUNCTION_GENCODE_REGISTRATION"},{"CODE":"IDC_FUNCTION_ISCOMPLETEBMSSENDNOC"},{"CODE":"IDC_FUNCTION_GENCODE_SUBCONTRACT"},{"CODE":"IDC_FUNCTION_GENCODE_REQUEST"},{"CODE":"IDC_FUNCTION_GENCODE_REQUESTDETAIL"},{"CODE":"IDC_FUNCTION_GENCODE_DEVICE"},{"CODE":"IDC_FUNCTION_GENCODE_REGISTRATIONDETAIL"}]');
async function CheckALL() {
    console.clear();
    showAwaitUpdate()
    console.log('%c -- START CHECK -- ', 'color: #bada55');

    result = null;
    // Check kết nối db idc
    strProcess = 'Connect DB IDC';
    log(0);
    result = await callAjax('GET', '/idc/MasterDataIDC/GetLocation').then(res => { return res; });
    log(result);
    // FTIMiddleware
    strProcess = 'Connect FTMS';
    log(0);
    input = {
        server: 'FTIMiddleware'
    }
    result = await callAjax('GET', '/idc/MasterDataIDC/checkConnect', input).then(res => { return res; });
    log(result);
    // DWF
    strProcess = 'Connect DWF';
    log(0);
    input = {
        server: 'DWF'
    }
    result = await callAjax('GET', '/idc/MasterDataIDC/checkConnect', input).then(res => { return res; });
    log(result);
    // BMS
    strProcess = 'Connect BMS';
    log(0);
    input = {
        server: 'BMS'
    }
    result = await callAjax('GET', '/idc/MasterDataIDC/checkConnect', input).then(res => { return res; });
    log(result);
    // NOC
    strProcess = 'Connect NOC';
    log(0);
    result = await callAjax('GET', '/idc/MasterDataIDC/NOClocation').then(res => { return res; });
    if (result.status == 200) result.code = 200;
    log(result);
    // Start DBA
    strProcess = 'Connect ACCESS DATA SYSTEM'; log(0);
    inputDBA.query = 'SELECT 1 FROM DUAL "d"';
    result = await callAjax('GET', '/idc/MasterDataIDC/DBA', inputDBA).then(res => { return res; });
    log(result); // kiểm tra kết nối db
    if (result.code == 200) {
        // Kiểm tra 'FUNCTION','PROCEDURE','PACKAGE','TABLE'
        strProcess = "Check 'FUNCTION','PROCEDURE','PACKAGE','TABLE'"; log(0);
        inputDBA.query = "SELECT (OWNER ||'_'|| OBJECT_TYPE ||'_'||OBJECT_NAME) AS CODE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('FUNCTION','PROCEDURE','PACKAGE','TABLE') AND OWNER = 'IDC' ORDER BY OBJECT_TYPE DESC";
        resultDB = await callAjax('GET', '/idc/MasterDataIDC/DBA', inputDBA).then(res => { return res; });
        // jsDB(local) resultDB(prod) : kiểm tra tuần tự. 

        var jsB = resultDB.data;
        await compareDB(0, jsB);
        console.log('%c Complete', 'color: #bada55', strProcess);
    }
    console.log('%c -- DONE CHECK -- ', 'color: #bada55');
    showNotification(0, ' -- DONE CHECK -- ', 1)
}

async function compareDB(flag, jsB) {
    var objectA = jsDB[flag];
    if (!objectA) return;
    for (i = 0; i < jsB.length; i++) {
        element = jsB[i];
        if (objectA.CODE == element.CODE) {
            jsB.splice(i, 1);
            await compareDB(flag + 1, jsB);
            return;
        }
    }
    console.log('%cNot Found', 'color: red', objectA.CODE);
    await compareDB(flag + 1, jsB);
}

function log(result) {
    if (result == 0) {
        console.log(strProcess);
        changeStatusAwait(strProcess);
        return;
    }
    if (!result) {
        console.log('%cError', 'color: #RED', strProcess);
        return;
    }
    if (result.code == 200) {
        console.log('%c Complete', 'color: #bada55', strProcess, ', Status', result.status);
    }
    else {
        console.log('%c Error', 'color: RED', strProcess, ', Status', result.status);
    }
}
function onRun() {

    CheckALL();
}
onRun();

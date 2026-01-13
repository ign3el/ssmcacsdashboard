# Database Schema Map: cms

Total Tables: 289

## ACDS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| Alias | nvarchar | 32 | NO |  |
| RTUType | smallint | 2 | NO |  |
| DownloadPort | int | 4 | NO |  |
| DownloadCallbackPort | int | 4 | NO |  |
| EnrollmentPort | int | 4 | NO |  |
| EnrollmentCallbackPort | int | 4 | NO |  |
| CardPage | int | 4 | NO |  |

## ACDSCardFields

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ACDSAlias | nvarchar | 32 | NO |  |
| FieldID | tinyint | 1 | NO |  |
| TableName | nvarchar | 256 | NO |  |
| FieldName | nvarchar | 256 | NO |  |

## ACDSEnrollmentDefaults

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| Station | tinyint | 1 | NO |  |
| EnrollmentReader | bigint | 8 | NO |  |
| EnrollmentType | smallint | 2 | NO |  |
| EncodingReader | bigint | 8 | NO |  |
| EncodingType | smallint | 2 | NO |  |

## ACDSEnrollmentReaders

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PointNo | bigint | 8 | NO |  |
| ACDSAlias | nvarchar | 32 | NO |  |
| Name | nvarchar | 80 | NO |  |
| Cred | smallint | 2 | NO |  |
| EnrollmentTypes | smallint | 2 | NO |  |
| Timeout | smallint | 2 | NO |  |

## ACDSEnrollmentTypes

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ACDSAlias | nvarchar | 32 | NO |  |
| EnrollmentType | smallint | 2 | NO |  |
| Description | nvarchar | -1 | NO |  |
| DescriptionStringID | int | 4 | NO |  |
| IsEncodingType | bit | 1 | NO |  |
| CardEncodedField | nvarchar | 256 | NO |  |
| ResultData | nvarchar | -1 | NO |  |

## AC_ADL

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ADL_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| PERIPHERAL_DESCRIPTION | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_2 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_3 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_4 | nvarchar | 64 | YES |  |
| ADL_ID | smallint | 2 | YES |  |
| ADL_TYPE | tinyint | 1 | YES |  |
| DISPLAY_TYPE | tinyint | 1 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_ADL_FIELD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ADL_KEY | nvarchar | 16 | NO |  |
| FIELD_NUMBER | tinyint | 1 | NO |  |
| LBL_DATA_ROW | tinyint | 1 | YES |  |
| LBL_DATA_COL | tinyint | 1 | YES |  |
| LBL_ATTRIBUTE | tinyint | 1 | YES |  |
| LBL_HORIZONTAL | tinyint | 1 | YES |  |
| LBL_VERTICAL | tinyint | 1 | YES |  |
| LBL_DATA_STRING | nvarchar | 80 | YES |  |
| LBL_DATA_STRING_2 | nvarchar | 80 | YES |  |
| LBL_DATA_STRING_3 | nvarchar | 80 | YES |  |
| LBL_DATA_STRING_4 | nvarchar | 80 | YES |  |
| FIELD_DATA_ROW | tinyint | 1 | YES |  |
| FIELD_DATA_COL | tinyint | 1 | YES |  |
| FIELD_ATTRIBUTE | tinyint | 1 | YES |  |
| FIELD_HORIZONTAL | tinyint | 1 | YES |  |
| FIELD_VERTICAL | tinyint | 1 | YES |  |
| FIELD_TYPE | tinyint | 1 | YES |  |
| FIELD_LENGTH | tinyint | 1 | YES |  |
| DECIMAL_LENGTH | tinyint | 1 | YES |  |
| FIELD_MANDATORY | tinyint | 1 | YES |  |
| DATE_FORMAT | tinyint | 1 | YES |  |
| TIME_FORMAT | tinyint | 1 | YES |  |
| LIST_ACRONYM | nvarchar | 16 | YES |  |

## AC_ADL_LIST

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LIST_ACRONYM | nvarchar | 16 | NO |  |
| ITEM_ID | tinyint | 1 | NO |  |
| DESCRIPTION_1 | nvarchar | 64 | YES |  |
| DESCRIPTION_2 | nvarchar | 64 | YES |  |
| DESCRIPTION_3 | nvarchar | 64 | YES |  |
| DESCRIPTION_4 | nvarchar | 64 | YES |  |

## AC_ASSET

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ASSET_ID | nvarchar | 510 | NO |  |
| VISITOR_ID | int | 4 | NO |  |
| VISIT_START | datetime | 8 | NO |  |
| ASSET_DESCRIPTION | nvarchar | 200 | YES |  |
| ASSET_TYPE | nvarchar | 100 | YES |  |
| MODEL | nvarchar | 4 | YES |  |
| ASSET_STATUS | int | 4 | YES |  |
| JUSTIFICATION | nvarchar | 40 | YES |  |
| DOCUMENT_1 | nvarchar | 40 | YES |  |
| DOCUMENT_2 | nvarchar | 40 | YES |  |
| DOCUMENT_3 | nvarchar | 40 | YES |  |
| DOCUMENT_4 | nvarchar | 40 | YES |  |
| DOCUMENT_5 | nvarchar | 40 | YES |  |
| DATE_1 | datetime | 8 | YES |  |
| DATE_2 | datetime | 8 | YES |  |
| DATE_3 | datetime | 8 | YES |  |
| DATE_4 | datetime | 8 | YES |  |
| DATE_5 | datetime | 8 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| PARAMETER_3 | nvarchar | 40 | YES |  |
| PARAMETER_4 | nvarchar | 40 | YES |  |
| PARAMETER_5 | nvarchar | 40 | YES |  |
| FLAG_1 | tinyint | 1 | YES |  |
| FLAG_2 | tinyint | 1 | YES |  |
| FLAG_3 | tinyint | 1 | YES |  |
| FLAG_4 | tinyint | 1 | YES |  |
| FLAG_5 | tinyint | 1 | YES |  |
| NOTES | nvarchar | 200 | YES |  |
| RowGuid | uniqueidentifier | 16 | NO |  |

## AC_BEHAVIOR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| SITE | smallint | 2 | YES |  |
| BM_TYPE | tinyint | 1 | NO |  |
| SERVER_ID | smallint | 2 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_BEHAVIOR_DAYS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| BLOCK_ID | tinyint | 1 | NO |  |
| BEHAVIOR_FBK | smallint | 2 | YES |  |
| MONDAY_ENABLE | tinyint | 1 | YES |  |
| TUESDAY_ENABLE | tinyint | 1 | YES |  |
| WEDNESDAY_ENABLE | tinyint | 1 | YES |  |
| THURSDAY_ENABLE | tinyint | 1 | YES |  |
| FRIDAY_ENABLE | tinyint | 1 | YES |  |
| SATURDAY_ENABLE | tinyint | 1 | YES |  |
| SUNDAY_ENABLE | tinyint | 1 | YES |  |
| HOLIDAY_ENABLE | tinyint | 1 | YES |  |
| SPECIALDAY_ENABLE | tinyint | 1 | YES |  |

## AC_BEHAVIOR_FLOOR_MAP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| BLOCK_ID | tinyint | 1 | NO |  |
| MAP_ID | smallint | 2 | NO |  |

## AC_BEHAVIOR_GROUPS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| BLOCK_ID | smallint | 2 | NO |  |
| GROUP_BM | nvarchar | 510 | NO |  |

## AC_BEHAVIOR_TERMINALS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| BLOCK_ID | tinyint | 1 | NO |  |
| TERMINAL_KEY | nvarchar | 16 | NO |  |

## AC_BEHAVIOR_THREAT_LEVELS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| BLOCK_ID | tinyint | 1 | NO |  |
| THREAT_LEVEL_ROWNO | tinyint | 1 | NO |  |
| POLICY | tinyint | 1 | YES |  |
| IS_ENABLED | bit | 1 | YES |  |

## AC_BEHAVIOR_TIMEPERIODS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| BLOCK_ID | tinyint | 1 | NO |  |
| TIMEPERIOD | smallint | 2 | NO |  |

## AC_CALENDAR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CALENDAR_ID | tinyint | 1 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| HOLIDAY_01 | nvarchar | 8 | YES |  |
| HOLIDAY_02 | nvarchar | 8 | YES |  |
| HOLIDAY_03 | nvarchar | 8 | YES |  |
| HOLIDAY_04 | nvarchar | 8 | YES |  |
| HOLIDAY_05 | nvarchar | 8 | YES |  |
| HOLIDAY_06 | nvarchar | 8 | YES |  |
| HOLIDAY_07 | nvarchar | 8 | YES |  |
| HOLIDAY_08 | nvarchar | 8 | YES |  |
| HOLIDAY_09 | nvarchar | 8 | YES |  |
| HOLIDAY_10 | nvarchar | 8 | YES |  |
| HOLIDAY_11 | nvarchar | 8 | YES |  |
| HOLIDAY_12 | nvarchar | 8 | YES |  |
| HOLIDAY_13 | nvarchar | 8 | YES |  |
| HOLIDAY_14 | nvarchar | 8 | YES |  |
| HOLIDAY_15 | nvarchar | 8 | YES |  |
| HOLIDAY_16 | nvarchar | 8 | YES |  |
| SPECIAL_01 | nvarchar | 8 | YES |  |
| SPECIAL_02 | nvarchar | 8 | YES |  |
| SPECIAL_03 | nvarchar | 8 | YES |  |
| SPECIAL_04 | nvarchar | 8 | YES |  |
| SPECIAL_05 | nvarchar | 8 | YES |  |
| SPECIAL_06 | nvarchar | 8 | YES |  |
| SPECIAL_07 | nvarchar | 8 | YES |  |
| SPECIAL_08 | nvarchar | 8 | YES |  |
| SPECIAL_09 | nvarchar | 8 | YES |  |
| SPECIAL_10 | nvarchar | 8 | YES |  |
| SPECIAL_11 | nvarchar | 8 | YES |  |
| SPECIAL_12 | nvarchar | 8 | YES |  |
| SPECIAL_13 | nvarchar | 8 | YES |  |
| SPECIAL_14 | nvarchar | 8 | YES |  |
| SPECIAL_15 | nvarchar | 8 | YES |  |
| SPECIAL_16 | nvarchar | 8 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_CARD_PROG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| LAST_CARD_ID | int | 4 | YES |  |
| LAST_NEGATIVE_CARD_ID | int | 4 | YES |  |

## AC_CARD_RANGE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RANGE_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| SERVER_ID | smallint | 2 | NO |  |
| LAYOUT_ID | tinyint | 1 | YES |  |
| START_CARDNUMBER | nvarchar | 40 | YES |  |
| STOP_CARDNUMBER | nvarchar | 40 | YES |  |
| SGR_GROUP_ID | smallint | 2 | YES |  |
| IS_TEMPLATE | tinyint | 1 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_CARD_RANGE_SITE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RANGE_ID | smallint | 2 | NO |  |
| SERVER_ID | smallint | 2 | NO |  |
| SITE | smallint | 2 | NO |  |
| RANGE_ENABLE | tinyint | 1 | YES |  |
| START_VALIDITY | datetime | 8 | YES |  |
| END_VALIDITY | datetime | 8 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_CARD_RANGE_SITE_ALTBEHAVIOR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RANGE_ID | smallint | 2 | NO |  |
| SERVER_ID | smallint | 2 | NO |  |
| SITE | smallint | 2 | NO |  |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| START_VALIDITY | datetime | 8 | YES |  |
| END_VALIDITY | datetime | 8 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_CARD_RANGE_SITE_BEHAVIOR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RANGE_ID | smallint | 2 | NO |  |
| SERVER_ID | smallint | 2 | NO |  |
| SITE | smallint | 2 | NO |  |
| BEHAVIOR_ID | smallint | 2 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_CH_SECURITY_STATUS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SBI_ID | int | 4 | NO |  |
| TRANSIT_DATE | datetime | 8 | YES |  |
| TERMINAL | nvarchar | 16 | YES |  |
| SECURITY_STATUS | tinyint | 1 | YES |  |
| APB_GROUP | smallint | 2 | NO |  |

## AC_CLASS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CLASS_ID | smallint | 2 | NO |  |
| SBI_TYPE | tinyint | 1 | NO |  |
| CLASS_LABEL | nvarchar | 100 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_CLASS_VALUES

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CLASS_ID | smallint | 2 | NO |  |
| SBI_TYPE | tinyint | 1 | NO |  |
| VALUE_KEY | nvarchar | 100 | NO |  |
| DESCRIPTION | nvarchar | 100 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_CTU_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CTU_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| CTU_TYPE | tinyint | 1 | YES |  |
| IP_ADDRESS | nvarchar | 30 | YES |  |
| NET_MASK | nvarchar | 30 | YES |  |
| ROUTER1 | nvarchar | 30 | YES |  |
| ROUTER2 | nvarchar | 30 | YES |  |
| ROUTER3 | nvarchar | 30 | YES |  |
| ROUTER4 | nvarchar | 30 | YES |  |
| ROUTER5 | nvarchar | 30 | YES |  |
| SERVER_TFTP | nvarchar | 30 | YES |  |
| HOST_UDP_PORT | smallint | 2 | YES |  |
| ECH_USER_DOMAIN | tinyint | 1 | YES |  |
| ECH_FLAG_AUT | tinyint | 1 | YES |  |
| DEGRADED_ENABLE | tinyint | 1 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RESUME_FBK | smallint | 2 | YES |  |
| APB_GROUP | smallint | 2 | YES |  |
| PRINTER_ENABLE | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| PRINTER_MODEL | tinyint | 1 | YES |  |
| PRINTER_BEHAVIOR | tinyint | 1 | YES |  |
| POLLING_CMD | nvarchar | 28 | YES |  |
| CUT_CMD | nvarchar | 28 | YES |  |
| RESET_DH_CMD | nvarchar | 28 | YES |  |
| SET_DH_CMD | nvarchar | 28 | YES |  |
| RESET_DW_CMD | nvarchar | 28 | YES |  |
| SET_DW_CMD | nvarchar | 28 | YES |  |
| SET_NORMAL_CMD | nvarchar | 28 | YES |  |
| MAX_COL_NUMBER | tinyint | 1 | YES |  |
| POLLING_RET_CODE | nvarchar | 4 | YES |  |
| MASK_POLLING_RET_CODE | nvarchar | 4 | YES |  |
| PAPER_OUT_RET_CODE | nvarchar | 4 | YES |  |
| MASK_PAPER_OUT_RET_CODE | nvarchar | 4 | YES |  |
| CANTEEN_APB1 | datetime | 8 | YES |  |
| CANTEEN_APB2 | datetime | 8 | YES |  |
| CANTEEN_APB3 | datetime | 8 | YES |  |
| CANTEEN_APB4 | datetime | 8 | YES |  |
| FORMAT_ID | tinyint | 1 | YES |  |
| NEURON_ID | nvarchar | 36 | YES |  |
| ENABLE_SHARED | tinyint | 1 | YES |  |
| ENABLE_OFF_ON_TRANSIT | tinyint | 1 | YES |  |
| ENABLE_OFF_ON_ECHELON | tinyint | 1 | YES |  |
| SWITCH_CONDITION | tinyint | 1 | YES |  |
| SHARED_CHECK_TIME | smallint | 2 | YES |  |
| BEF_ASIDE_FBK | smallint | 2 | YES |  |
| AFT_ASIDE_FBK | smallint | 2 | YES |  |
| BEF_NORMAL_FBK | smallint | 2 | YES |  |
| AFT_NORMAL_FBK | smallint | 2 | YES |  |
| BEF_OVERLOAD_FBK | smallint | 2 | YES |  |
| AFT_OVERLOAD_FBK | smallint | 2 | YES |  |
| PPP_ADDRESS | nvarchar | 30 | YES |  |
| NUM_TEL | nvarchar | 40 | YES |  |
| CTU_TEL1 | nvarchar | 40 | YES |  |
| CTU_TEL2 | nvarchar | 40 | YES |  |
| CTU_TEL3 | nvarchar | 40 | YES |  |
| CTU_TEL4 | nvarchar | 40 | YES |  |
| MODEM_TIMEOUT | smallint | 2 | YES |  |
| MODEM_RETRY | tinyint | 1 | YES |  |
| TEST_TIME1 | datetime | 8 | YES |  |
| TEST_TIME2 | datetime | 8 | YES |  |
| EBI_TEST_TIME1 | datetime | 8 | YES |  |
| EBI_TEST_TIME2 | datetime | 8 | YES |  |
| REST_LINE_TIME | smallint | 2 | YES |  |
| EVENT_BACK | tinyint | 1 | YES |  |
| MONDAY_ENABLE | tinyint | 1 | YES |  |
| TUESDAY_ENABLE | tinyint | 1 | YES |  |
| WEDNESDAY_ENABLE | tinyint | 1 | YES |  |
| THURSDAY_ENABLE | tinyint | 1 | YES |  |
| FRIDAY_ENABLE | tinyint | 1 | YES |  |
| SATURDAY_ENABLE | tinyint | 1 | YES |  |
| SUNDAY_ENABLE | tinyint | 1 | YES |  |
| SPECIALDAY_ENABLE | tinyint | 1 | YES |  |
| HOLIDAY_ENABLE | tinyint | 1 | YES |  |
| EVENT_BACK_START1 | datetime | 8 | YES |  |
| EVENT_BACK_STOP1 | datetime | 8 | YES |  |
| EVENT_BACK_START2 | datetime | 8 | YES |  |
| EVENT_BACK_STOP2 | datetime | 8 | YES |  |
| ENABLE_RING | tinyint | 1 | YES |  |
| CIRCULAR_BUFFER | tinyint | 1 | YES |  |
| FW | nvarchar | 510 | YES |  |
| ENABLE_CUSTOM | tinyint | 1 | YES |  |
| OET_FILE_NAME | nvarchar | 24 | YES |  |
| LAST_NEURON | nvarchar | 36 | YES |  |
| LAST_PROGRAM | nvarchar | 46 | YES |  |
| LIFT_INTERFACE | tinyint | 1 | YES |  |
| PROTOCOL_1 | tinyint | 1 | YES |  |
| SPEED_1 | tinyint | 1 | YES |  |
| DATA_BITS_1 | tinyint | 1 | YES |  |
| PARITY_1 | tinyint | 1 | YES |  |
| STOP_BITS_1 | tinyint | 1 | YES |  |
| NULL_SCAN_1 | smallint | 2 | YES |  |
| SCAN_PERIOD_1 | smallint | 2 | YES |  |
| LATCH_PERIOD_1 | smallint | 2 | YES |  |
| RESPONCE_1 | smallint | 2 | YES |  |
| PROTOCOL_2 | tinyint | 1 | YES |  |
| SPEED_2 | tinyint | 1 | YES |  |
| DATA_BITS_2 | tinyint | 1 | YES |  |
| PARITY_2 | tinyint | 1 | YES |  |
| STOP_BITS_2 | tinyint | 1 | YES |  |
| NULL_SCAN_2 | smallint | 2 | YES |  |
| SCAN_PERIOD_2 | smallint | 2 | YES |  |
| LATCH_PERIOD_2 | smallint | 2 | YES |  |
| RESPONCE_2 | smallint | 2 | YES |  |
| TZ_TYPE | tinyint | 1 | YES |  |
| TZ_DELTA_ID | tinyint | 1 | YES |  |
| TZ_DELTA_GMT | smallint | 2 | YES |  |
| DST_ENABLE | tinyint | 1 | YES |  |
| TO_DST_TYPE | tinyint | 1 | YES |  |
| TO_DST_FIX_DATE | datetime | 8 | YES |  |
| TO_DST_MM | tinyint | 1 | YES |  |
| TO_DST_WEEK | tinyint | 1 | YES |  |
| TO_DST_WDAY | tinyint | 1 | YES |  |
| TO_DST_TIME | datetime | 8 | YES |  |
| TO_DST_DELTA | smallint | 2 | YES |  |
| TO_SOLAR_TYPE | tinyint | 1 | YES |  |
| TO_SOLAR_FIX_DATE | datetime | 8 | YES |  |
| TO_SOLAR_MM | tinyint | 1 | YES |  |
| TO_SOLAR_WEEK | tinyint | 1 | YES |  |
| TO_SOLAR_WDAY | tinyint | 1 | YES |  |
| TO_SOLAR_TIME | datetime | 8 | YES |  |
| TO_SOLAR_DELTA | smallint | 2 | YES |  |
| APB_RANGE | tinyint | 1 | YES |  |
| STARTUP_FBK | smallint | 2 | YES |  |
| ENCRYPTION_P2P | tinyint | 1 | YES |  |
| ENCRYPTION_CARD_NUMBER | tinyint | 1 | YES |  |
| CMD_AUTHENTICATION | tinyint | 1 | YES |  |
| MAINTAIN_CH_ZONE | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_CTU_CFG_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CTU_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| CTU_TYPE | tinyint | 1 | YES |  |
| IP_ADDRESS | nvarchar | 30 | YES |  |
| NET_MASK | nvarchar | 30 | YES |  |
| ROUTER1 | nvarchar | 30 | YES |  |
| ROUTER2 | nvarchar | 30 | YES |  |
| ROUTER3 | nvarchar | 30 | YES |  |
| ROUTER4 | nvarchar | 30 | YES |  |
| ROUTER5 | nvarchar | 30 | YES |  |
| SERVER_TFTP | nvarchar | 30 | YES |  |
| HOST_UDP_PORT | smallint | 2 | YES |  |
| ECH_USER_DOMAIN | tinyint | 1 | YES |  |
| ECH_FLAG_AUT | tinyint | 1 | YES |  |
| DEGRADED_ENABLE | tinyint | 1 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RESUME_FBK | smallint | 2 | YES |  |
| APB_GROUP | smallint | 2 | YES |  |
| PRINTER_ENABLE | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| PRINTER_MODEL | tinyint | 1 | YES |  |
| PRINTER_BEHAVIOR | tinyint | 1 | YES |  |
| POLLING_CMD | nvarchar | 28 | YES |  |
| CUT_CMD | nvarchar | 28 | YES |  |
| RESET_DH_CMD | nvarchar | 28 | YES |  |
| SET_DH_CMD | nvarchar | 28 | YES |  |
| RESET_DW_CMD | nvarchar | 28 | YES |  |
| SET_DW_CMD | nvarchar | 28 | YES |  |
| SET_NORMAL_CMD | nvarchar | 28 | YES |  |
| MAX_COL_NUMBER | tinyint | 1 | YES |  |
| POLLING_RET_CODE | nvarchar | 4 | YES |  |
| MASK_POLLING_RET_CODE | nvarchar | 4 | YES |  |
| PAPER_OUT_RET_CODE | nvarchar | 4 | YES |  |
| MASK_PAPER_OUT_RET_CODE | nvarchar | 4 | YES |  |
| CANTEEN_APB1 | datetime | 8 | YES |  |
| CANTEEN_APB2 | datetime | 8 | YES |  |
| CANTEEN_APB3 | datetime | 8 | YES |  |
| CANTEEN_APB4 | datetime | 8 | YES |  |
| FORMAT_ID | tinyint | 1 | YES |  |
| NEURON_ID | nvarchar | 36 | YES |  |
| ENABLE_SHARED | tinyint | 1 | YES |  |
| ENABLE_OFF_ON_TRANSIT | tinyint | 1 | YES |  |
| ENABLE_OFF_ON_ECHELON | tinyint | 1 | YES |  |
| SWITCH_CONDITION | tinyint | 1 | YES |  |
| SHARED_CHECK_TIME | smallint | 2 | YES |  |
| BEF_ASIDE_FBK | smallint | 2 | YES |  |
| AFT_ASIDE_FBK | smallint | 2 | YES |  |
| BEF_NORMAL_FBK | smallint | 2 | YES |  |
| AFT_NORMAL_FBK | smallint | 2 | YES |  |
| BEF_OVERLOAD_FBK | smallint | 2 | YES |  |
| AFT_OVERLOAD_FBK | smallint | 2 | YES |  |
| PPP_ADDRESS | nvarchar | 30 | YES |  |
| NUM_TEL | nvarchar | 40 | YES |  |
| CTU_TEL1 | nvarchar | 40 | YES |  |
| CTU_TEL2 | nvarchar | 40 | YES |  |
| CTU_TEL3 | nvarchar | 40 | YES |  |
| CTU_TEL4 | nvarchar | 40 | YES |  |
| MODEM_TIMEOUT | smallint | 2 | YES |  |
| MODEM_RETRY | tinyint | 1 | YES |  |
| TEST_TIME1 | datetime | 8 | YES |  |
| TEST_TIME2 | datetime | 8 | YES |  |
| EBI_TEST_TIME1 | datetime | 8 | YES |  |
| EBI_TEST_TIME2 | datetime | 8 | YES |  |
| REST_LINE_TIME | smallint | 2 | YES |  |
| EVENT_BACK | tinyint | 1 | YES |  |
| MONDAY_ENABLE | tinyint | 1 | YES |  |
| TUESDAY_ENABLE | tinyint | 1 | YES |  |
| WEDNESDAY_ENABLE | tinyint | 1 | YES |  |
| THURSDAY_ENABLE | tinyint | 1 | YES |  |
| FRIDAY_ENABLE | tinyint | 1 | YES |  |
| SATURDAY_ENABLE | tinyint | 1 | YES |  |
| SUNDAY_ENABLE | tinyint | 1 | YES |  |
| SPECIALDAY_ENABLE | tinyint | 1 | YES |  |
| HOLIDAY_ENABLE | tinyint | 1 | YES |  |
| EVENT_BACK_START1 | datetime | 8 | YES |  |
| EVENT_BACK_STOP1 | datetime | 8 | YES |  |
| EVENT_BACK_START2 | datetime | 8 | YES |  |
| EVENT_BACK_STOP2 | datetime | 8 | YES |  |
| ENABLE_RING | tinyint | 1 | YES |  |
| CIRCULAR_BUFFER | tinyint | 1 | YES |  |
| FW | nvarchar | 510 | YES |  |
| ENABLE_CUSTOM | tinyint | 1 | YES |  |
| OET_FILE_NAME | nvarchar | 24 | YES |  |
| LAST_NEURON | nvarchar | 36 | YES |  |
| LAST_PROGRAM | nvarchar | 46 | YES |  |
| LIFT_INTERFACE | tinyint | 1 | YES |  |
| PROTOCOL_1 | tinyint | 1 | YES |  |
| SPEED_1 | tinyint | 1 | YES |  |
| DATA_BITS_1 | tinyint | 1 | YES |  |
| PARITY_1 | tinyint | 1 | YES |  |
| STOP_BITS_1 | tinyint | 1 | YES |  |
| NULL_SCAN_1 | smallint | 2 | YES |  |
| SCAN_PERIOD_1 | smallint | 2 | YES |  |
| LATCH_PERIOD_1 | smallint | 2 | YES |  |
| RESPONCE_1 | smallint | 2 | YES |  |
| PROTOCOL_2 | tinyint | 1 | YES |  |
| SPEED_2 | tinyint | 1 | YES |  |
| DATA_BITS_2 | tinyint | 1 | YES |  |
| PARITY_2 | tinyint | 1 | YES |  |
| STOP_BITS_2 | tinyint | 1 | YES |  |
| NULL_SCAN_2 | smallint | 2 | YES |  |
| SCAN_PERIOD_2 | smallint | 2 | YES |  |
| LATCH_PERIOD_2 | smallint | 2 | YES |  |
| RESPONCE_2 | smallint | 2 | YES |  |
| TZ_TYPE | tinyint | 1 | YES |  |
| TZ_DELTA_ID | tinyint | 1 | YES |  |
| TZ_DELTA_GMT | smallint | 2 | YES |  |
| DST_ENABLE | tinyint | 1 | YES |  |
| TO_DST_TYPE | tinyint | 1 | YES |  |
| TO_DST_FIX_DATE | datetime | 8 | YES |  |
| TO_DST_MM | tinyint | 1 | YES |  |
| TO_DST_WEEK | tinyint | 1 | YES |  |
| TO_DST_WDAY | tinyint | 1 | YES |  |
| TO_DST_TIME | datetime | 8 | YES |  |
| TO_DST_DELTA | smallint | 2 | YES |  |
| TO_SOLAR_TYPE | tinyint | 1 | YES |  |
| TO_SOLAR_FIX_DATE | datetime | 8 | YES |  |
| TO_SOLAR_MM | tinyint | 1 | YES |  |
| TO_SOLAR_WEEK | tinyint | 1 | YES |  |
| TO_SOLAR_WDAY | tinyint | 1 | YES |  |
| TO_SOLAR_TIME | datetime | 8 | YES |  |
| TO_SOLAR_DELTA | smallint | 2 | YES |  |
| APB_RANGE | tinyint | 1 | YES |  |
| STARTUP_FBK | smallint | 2 | YES |  |
| ENCRYPTION_P2P | tinyint | 1 | YES |  |
| ENCRYPTION_CARD_NUMBER | tinyint | 1 | YES |  |
| CMD_AUTHENTICATION | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_CTU_DYNDATA

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| DATA_ID | smallint | 2 | NO |  |
| IDX_DYN | smallint | 2 | YES |  |
| ATTRIBUTE | tinyint | 1 | YES |  |
| HORIZONTAL | tinyint | 1 | YES |  |
| VERTICAL | tinyint | 1 | YES |  |
| DYN_ROW | tinyint | 1 | YES |  |
| DYN_COLUMN | tinyint | 1 | YES |  |
| LENGTH_FIELD | tinyint | 1 | YES |  |
| VISIBLE | tinyint | 1 | YES |  |
| REPETITION | tinyint | 1 | YES |  |
| OFFSET | tinyint | 1 | YES |  |
| DATA_ORIGIN | tinyint | 1 | YES |  |
| FIELD_FORMAT | tinyint | 1 | YES |  |
| NOTES | nvarchar | 100 | YES |  |

## AC_CTU_LANGUAGE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| STRING_ID | smallint | 2 | NO |  |
| MAX_LEN | tinyint | 1 | YES |  |
| STRING | nvarchar | 80 | NO |  |

## AC_CZG_APB_PROPAGATION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CZG_ID | tinyint | 1 | NO |  |
| APB_PROPAGATION_GRP | tinyint | 1 | NO |  |

## AC_CZG_PRESENCE_PROPAGATION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CZG_ID | tinyint | 1 | NO |  |
| PRESENCE_PROPAGATION_GRP | tinyint | 1 | NO |  |

## AC_CZG_STATUS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CZG_ID | tinyint | 1 | NO |  |
| APB_STATUS | tinyint | 1 | YES |  |

## AC_DIGITAL_INPUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| INPUT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| RTU_KEY | nvarchar | 16 | NO |  |
| ADDRESS | tinyint | 1 | NO |  |
| POINT_TYPE | tinyint | 1 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| ACTIVATE_FBK | smallint | 2 | YES |  |
| DEACTIVATE_FBK | smallint | 2 | YES |  |
| ARM_FBK | smallint | 2 | YES |  |
| DISARM_FBK | smallint | 2 | YES |  |
| CUT_FBK | smallint | 2 | YES |  |
| CUT_RESUME_FBK | smallint | 2 | YES |  |
| SHORT_FBK | smallint | 2 | YES |  |
| SHORT_RESUME_FBK | smallint | 2 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RET_FBK | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_DIGITAL_INPUT_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| INPUT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| RTU_KEY | nvarchar | 16 | NO |  |
| ADDRESS | tinyint | 1 | NO |  |
| POINT_TYPE | tinyint | 1 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| ACTIVATE_FBK | smallint | 2 | YES |  |
| DEACTIVATE_FBK | smallint | 2 | YES |  |
| ARM_FBK | smallint | 2 | YES |  |
| DISARM_FBK | smallint | 2 | YES |  |
| CUT_FBK | smallint | 2 | YES |  |
| CUT_RESUME_FBK | smallint | 2 | YES |  |
| SHORT_FBK | smallint | 2 | YES |  |
| SHORT_RESUME_FBK | smallint | 2 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RET_FBK | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_DIGITAL_OUTPUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OUTPUT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| RTU_KEY | nvarchar | 16 | NO |  |
| ADDRESS | tinyint | 1 | NO |  |
| POINT_TYPE | tinyint | 1 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| STARTING_VALUE | tinyint | 1 | YES |  |
| EXECUTION_TIME | smallint | 2 | YES |  |
| EXECUTION_TYPE | tinyint | 1 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| CUT_FBK | smallint | 2 | YES |  |
| CUT_RESUME_FBK | smallint | 2 | YES |  |
| SHORT_FBK | smallint | 2 | YES |  |
| SHORT_RESUME_FBK | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_DIGITAL_OUTPUT_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OUTPUT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| RTU_KEY | nvarchar | 16 | NO |  |
| ADDRESS | tinyint | 1 | NO |  |
| POINT_TYPE | tinyint | 1 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| STARTING_VALUE | tinyint | 1 | YES |  |
| EXECUTION_TIME | smallint | 2 | YES |  |
| EXECUTION_TYPE | tinyint | 1 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| CUT_FBK | smallint | 2 | YES |  |
| CUT_RESUME_FBK | smallint | 2 | YES |  |
| SHORT_FBK | smallint | 2 | YES |  |
| SHORT_RESUME_FBK | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_DVM_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CAMERA_NAME | nvarchar | 100 | NO |  |
| CAMERA_DESCRIPTION | nvarchar | 510 | YES |  |
| CAMERA_SERVER | nvarchar | 510 | YES |  |
| CAMERA_LOCATION | nvarchar | 510 | YES |  |
| CAMERA_ID | smallint | 2 | YES |  |

## AC_DVM_PRESET_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CAMERA_NAME | nvarchar | 100 | NO |  |
| ID_PRESET | smallint | 2 | NO |  |
| PRESET_NAME | nvarchar | 100 | YES |  |
| CAMERA_ID | smallint | 2 | YES |  |

## AC_ENQUIRY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ENQUIRY_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| PERIPHERAL_DESCRIPTION | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_2 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_3 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_4 | nvarchar | 64 | YES |  |
| DISPLAY_TYPE | tinyint | 1 | YES |  |
| DFW_ENQUIRY_REQ | smallint | 2 | YES |  |
| IDX_DYN_ENQUIRY_REQ | smallint | 2 | YES |  |
| DFW_ENQUIRY_RES | smallint | 2 | YES |  |
| IDX_DYN_ENQUIRY_RES | smallint | 2 | YES |  |
| ENQUIRY_TYPE | tinyint | 1 | YES |  |
| LOCAL_FREE_TYPE | tinyint | 1 | YES |  |
| ACCESS_CONTROL | tinyint | 1 | YES |  |
| TIME_ATTENDANCE | tinyint | 1 | YES |  |
| CANTEEN | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| WAIT_TIME | int | 4 | YES |  |
| TITLE_ENABLE | tinyint | 1 | YES |  |
| SHORTNAME_ENABLE | tinyint | 1 | YES |  |
| CLEARCODE_ENABLE | tinyint | 1 | YES |  |
| DATE_FORMAT | tinyint | 1 | YES |  |
| TIME_FORMAT | tinyint | 1 | YES |  |
| DIRECTION_ENABLE | tinyint | 1 | YES |  |
| TYPE_ENABLE | tinyint | 1 | YES |  |
| REASON_ENABLE | tinyint | 1 | YES |  |
| ENHANCED_ENABLE | tinyint | 1 | YES |  |
| TERMINAL_ENABLE | tinyint | 1 | YES |  |
| ZONE_ENABLE | tinyint | 1 | YES |  |
| ENQUIRY_ID | smallint | 2 | YES |  |
| STORAGE_ID | tinyint | 1 | YES |  |
| NETX_ENQUIRY | nvarchar | 16 | YES |  |
| PREV_ENQUIRY | nvarchar | 16 | YES |  |
| ZONE_INCLUSION | tinyint | 1 | YES |  |
| LANGUAGE_ID | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_ENQUIRY_DATA

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ENQUIRY_KEY | nvarchar | 16 | NO |  |
| CARD_ID | int | 4 | NO |  |
| FIELD1 | nvarchar | 80 | YES |  |
| FIELD2 | nvarchar | 80 | YES |  |
| FIELD3 | nvarchar | 80 | YES |  |
| FIELD4 | nvarchar | 80 | YES |  |
| FIELD5 | nvarchar | 80 | YES |  |
| FIELD6 | nvarchar | 80 | YES |  |
| FIELD7 | nvarchar | 80 | YES |  |
| FIELD8 | nvarchar | 80 | YES |  |
| FIELD9 | nvarchar | 80 | YES |  |
| FIELD10 | nvarchar | 80 | YES |  |
| EXTERNAL_SOURCE | tinyint | 1 | YES |  |

## AC_ENQUIRY_FIELD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ENQUIRY_KEY | nvarchar | 16 | NO |  |
| FIELD_NUMBER | tinyint | 1 | NO |  |
| FIX_DATA_ROW | tinyint | 1 | YES |  |
| FIX_DATA_COL | tinyint | 1 | YES |  |
| FIX_ATTRIBUTE | tinyint | 1 | YES |  |
| FIX_HORIZONTAL | tinyint | 1 | YES |  |
| FIX_VERTICAL | tinyint | 1 | YES |  |
| FIX_DATA_STRING | nvarchar | 80 | YES |  |
| FIX_DATA_STRING_2 | nvarchar | 80 | YES |  |
| FIX_DATA_STRING_3 | nvarchar | 80 | YES |  |
| FIX_DATA_STRING_4 | nvarchar | 80 | YES |  |
| DYN_DATA_ROW | tinyint | 1 | YES |  |
| DYN_DATA_COL | tinyint | 1 | YES |  |
| DYN_ATTRIBUTE | tinyint | 1 | YES |  |
| DYN_HORIZONTAL | tinyint | 1 | YES |  |
| DYN_VERTICAL | tinyint | 1 | YES |  |
| DYN_ORIGIN | tinyint | 1 | YES |  |
| DYN_LENGTH | tinyint | 1 | YES |  |

## AC_ENQUIRY_ZONE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ENQUIRY_KEY | nvarchar | 16 | NO |  |
| ZONE_KEY | nvarchar | 16 | NO |  |

## AC_FEEDBACK

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FEEDBACK_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| NEXT_FBK | smallint | 2 | YES |  |
| MANUAL_ACTIVATION | tinyint | 1 | YES |  |
| FBK_KEY | nvarchar | 16 | YES |  |
| CTU_START | nvarchar | 16 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| BREAK_OFF | tinyint | 1 | YES |  |
| ALLOW_SEGREGATION | smallint | 2 | NO |  |
| GENERATE_EVENT | smallint | 2 | NO |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_FEEDBACK_CMD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FEEDBACK_ID | smallint | 2 | NO |  |
| ORDER_ID | tinyint | 1 | NO |  |
| DELAY_TIME | smallint | 2 | YES |  |
| OBJECT_KEY | nvarchar | 16 | YES |  |
| CMD_ID | tinyint | 1 | YES |  |
| CAMERA_NAME | nvarchar | 100 | YES |  |
| DURATION | smallint | 2 | YES |  |
| PRERECORDING | smallint | 2 | YES |  |
| ID_TYPE_INFO | tinyint | 1 | YES |  |
| STATION | smallint | 2 | YES |  |
| MONITOR | smallint | 2 | YES |  |
| DISPLAY_TYPE | tinyint | 1 | YES |  |
| DISPLAY_NAME | nvarchar | 8000 | YES |  |
| ID_TAB | tinyint | 1 | YES |  |
| ID_PRESET | smallint | 2 | YES |  |
| PRESET_NAME | varchar | 50 | YES |  |
| POINT1 | nvarchar | 16 | YES |  |
| COMMAND1 | nvarchar | 510 | YES |  |
| EBI_PARAM1 | nvarchar | 510 | YES |  |
| EBI_VALUE1 | tinyint | 1 | YES |  |
| LABEL1 | nvarchar | 50 | YES |  |
| POINT2 | nvarchar | 16 | YES |  |
| COMMAND2 | nvarchar | 510 | YES |  |
| EBI_PARAM2 | nvarchar | 510 | YES |  |
| EBI_VALUE2 | tinyint | 1 | YES |  |
| LABEL2 | nvarchar | 50 | YES |  |
| POINT3 | nvarchar | 16 | YES |  |
| COMMAND3 | nvarchar | 510 | YES |  |
| EBI_PARAM3 | nvarchar | 510 | YES |  |
| EBI_VALUE3 | tinyint | 1 | YES |  |
| LABEL3 | nvarchar | 50 | YES |  |
| POINT4 | nvarchar | 16 | YES |  |
| COMMAND4 | nvarchar | 510 | YES |  |
| EBI_PARAM4 | nvarchar | 510 | YES |  |
| EBI_VALUE4 | tinyint | 1 | YES |  |
| LABEL4 | nvarchar | 50 | YES |  |
| CAMERA_ID | smallint | 2 | YES |  |
| THREAT_LEVEL_ID | tinyint | 1 | YES |  |

## AC_FEEDBACK_CMD_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FEEDBACK_ID | smallint | 2 | NO |  |
| ORDER_ID | tinyint | 1 | NO |  |
| DELAY_TIME | smallint | 2 | YES |  |
| OBJECT_KEY | nvarchar | 16 | YES |  |
| CMD_ID | tinyint | 1 | YES |  |
| CAMERA_NAME | nvarchar | 30 | YES |  |
| DURATION | smallint | 2 | YES |  |
| PRERECORDING | smallint | 2 | YES |  |
| ID_TYPE_INFO | tinyint | 1 | YES |  |
| STATION | smallint | 2 | YES |  |
| MONITOR | smallint | 2 | YES |  |
| DISPLAY_TYPE | tinyint | 1 | YES |  |
| DISPLAY_NAME | nvarchar | 510 | YES |  |
| ID_TAB | tinyint | 1 | YES |  |
| ID_PRESET | smallint | 2 | YES |  |

## AC_FEEDBACK_THREAT_LEVELS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FEEDBACK_ID | smallint | 2 | NO |  |
| THREAT_LEVEL_ROWNO | tinyint | 1 | NO |  |
| IS_ENABLED | bit | 1 | YES |  |
| ELSE_FBK | smallint | 2 | YES |  |

## AC_FEEDBACK_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FEEDBACK_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| NEXT_FBK | smallint | 2 | YES |  |
| MANUAL_ACTIVATION | tinyint | 1 | YES |  |
| FBK_KEY | nvarchar | 16 | YES |  |
| CTU_START | nvarchar | 16 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| BREAK_OFF | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_FLOOR_MAP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| MAP_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| LIFT_KEY | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_FLOOR_MAP_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| MAP_ID | smallint | 2 | NO |  |
| FLOOR_ID | smallint | 2 | NO |  |

## AC_LAYOUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LAYOUT_ID | tinyint | 1 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| POS_CARD | smallint | 2 | YES |  |
| LEN_CARD_NUMBER | tinyint | 1 | YES |  |
| POS_ED_CARD | smallint | 2 | YES |  |
| LEN_ED_CARD | tinyint | 1 | YES |  |
| POS_TYPE_CARD | tinyint | 1 | YES |  |
| POS_CTRL_DATE | tinyint | 1 | YES |  |
| POS_DATE | tinyint | 1 | YES |  |
| POS_CRC | tinyint | 1 | YES |  |
| MAGNETIC | tinyint | 1 | YES |  |
| TYPE_LAYOUT | tinyint | 1 | YES |  |
| DIM_LAYOUT_BIT | smallint | 2 | YES |  |
| CODING_TYPE | tinyint | 1 | YES |  |
| POS_CARDNUMBER_BIT | tinyint | 1 | YES |  |
| LEN_CARDNUMBER_BIT | tinyint | 1 | YES |  |
| POS_LCR | tinyint | 1 | YES |  |
| LEN_LCR | tinyint | 1 | YES |  |
| POS_PARITY_1 | smallint | 2 | YES |  |
| TYPE_PARITY_1 | tinyint | 1 | YES |  |
| MASK_PARITY_1 | nvarchar | 64 | YES |  |
| POS_PARITY_2 | smallint | 2 | YES |  |
| TYPE_PARITY_2 | tinyint | 1 | YES |  |
| MASK_PARITY_2 | nvarchar | 64 | YES |  |
| POS_PARITY_3 | smallint | 2 | YES |  |
| TYPE_PARITY_3 | tinyint | 1 | YES |  |
| MASK_PARITY_3 | nvarchar | 64 | YES |  |
| POS_PARITY_4 | smallint | 2 | YES |  |
| TYPE_PARITY_4 | tinyint | 1 | YES |  |
| MASK_PARITY_4 | nvarchar | 64 | YES |  |
| MIF_RMODE | tinyint | 1 | YES |  |
| MIF_PSA | nvarchar | 4 | YES |  |
| MIF_FCC | nvarchar | 4 | YES |  |
| MIF_AC | nvarchar | 4 | YES |  |
| MIF_PWD_S0 | nvarchar | 24 | YES |  |
| MIF_PWD_INFO | nvarchar | 24 | YES |  |
| LINKED_LAYOUT_ID | tinyint | 1 | YES |  |
| ICLASS_PWD | nvarchar | 32 | YES |  |
| SECURITY_KEY_TYPE | smallint | 2 | NO |  |
| DF_APPLICATION | nvarchar | 12 | YES |  |
| DF_FILE | nvarchar | 4 | YES |  |
| DF_APPLICATION_KEY | nvarchar | 64 | YES |  |
| DF_FILE_KEY | nvarchar | 64 | YES |  |
| DF_KEYDIVERSIFICATION_MODE | tinyint | 1 | YES |  |
| DF_COMMUNICATION_ENCRYPTION | tinyint | 1 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_LAYOUT_PLANT_CODE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LAYOUT_ID | tinyint | 1 | NO |  |
| PLANT_CODE_ID | tinyint | 1 | NO |  |
| POS_PLANT_CODE | smallint | 2 | YES |  |
| LEN_PLANT_CODE | tinyint | 1 | YES |  |
| POS_FACILITY | smallint | 2 | YES |  |
| LEN_FACILITY | tinyint | 1 | YES |  |
| PLANT_CODE | nvarchar | 20 | YES |  |

## AC_LIFT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LIFT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| LIFT_ID_CTU | tinyint | 1 | YES |  |
| CTU_KEY | nvarchar | 16 | YES |  |
| TERMINAL_KEY | nvarchar | 16 | YES |  |
| SERIAL_LINE | tinyint | 1 | YES |  |
| SINGLE_LATCH | tinyint | 1 | YES |  |
| BUTTON_TIMEOUT | smallint | 2 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| COMMUNICATION_FBK | smallint | 2 | YES |  |
| COMMUNICATION_RET_FBK | smallint | 2 | YES |  |
| POWER_FBK | smallint | 2 | YES |  |
| POWER_RET_FBK | smallint | 2 | YES |  |
| FIRE_FBK | smallint | 2 | YES |  |
| INDIPENDENT_FBK | smallint | 2 | YES |  |
| START_FBK | smallint | 2 | YES |  |
| EMERGENCY_FBK | smallint | 2 | YES |  |
| EMERGENCY_RET_FBK | smallint | 2 | YES |  |
| CAR_ALARM_FBK | smallint | 2 | YES |  |
| CAR_ALARM_RET_FBK | smallint | 2 | YES |  |
| ACCESS_MODE_FBK | smallint | 2 | YES |  |
| LIGHT_MODE_FBK | smallint | 2 | YES |  |
| SECURE_MODE_FBK | smallint | 2 | YES |  |
| OUT_OF_ORDER_FBK | smallint | 2 | YES |  |
| OUT_OF_ORDER_RET_FBK | smallint | 2 | YES |  |
| GROUP_ID | smallint | 2 | YES |  |
| CAR_ID | tinyint | 1 | YES |  |
| GW_LINE | tinyint | 1 | YES |  |
| POSITION | tinyint | 1 | YES |  |
| FLOOR_ID | tinyint | 1 | YES |  |
| DO_ACTIVATION_TIME | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_LIFT_FLOOR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LIFT_KEY | nvarchar | 16 | NO |  |
| FLOOR_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| POSITION_ID | smallint | 2 | YES |  |
| SECURE | tinyint | 1 | YES |  |
| DI_RTU_KEY | nvarchar | 16 | YES |  |
| DI_ADDRESS | tinyint | 1 | YES |  |
| DO_RTU_KEY | nvarchar | 16 | YES |  |
| DO_ADDRESS | tinyint | 1 | YES |  |

## AC_MENU

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| MENU_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| PERIPHERAL_DESCRIPTION | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_2 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_3 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_4 | nvarchar | 64 | YES |  |
| DISPLAY_TYPE | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_MENU_ITEM

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| MENU_KEY | nvarchar | 16 | NO |  |
| MENU_ITEM | tinyint | 1 | NO |  |
| ITEM_TYPE | tinyint | 1 | YES |  |
| LANGUAGE_KEY | tinyint | 1 | YES |  |
| REASON_KEY | nvarchar | 16 | YES |  |
| ENQUIRY_KEY | nvarchar | 16 | YES |  |
| TCATEGORY_KEY | nvarchar | 16 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |

## AC_MSG_SPONTANEOUS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| MSG_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| TIME_OUT | smallint | 2 | YES |  |
| START_VALIDITY | datetime | 8 | YES |  |
| STOP_VALIDITY | datetime | 8 | YES |  |
| TRANSACTION_OK | tinyint | 1 | YES |  |
| TRANSACTION_KO | tinyint | 1 | YES |  |
| ENTRY_OK | tinyint | 1 | YES |  |
| EXIT_OK | tinyint | 1 | YES |  |
| TRANSACTION_UNLOCK | tinyint | 1 | YES |  |
| ROW1 | nvarchar | 68 | YES |  |
| ROW2 | nvarchar | 68 | YES |  |
| ROW3 | nvarchar | 68 | YES |  |
| ROW4 | nvarchar | 68 | YES |  |
| ROW1_2 | nvarchar | 68 | YES |  |
| ROW2_2 | nvarchar | 68 | YES |  |
| ROW3_2 | nvarchar | 68 | YES |  |
| ROW4_2 | nvarchar | 68 | YES |  |
| ROW1_3 | nvarchar | 68 | YES |  |
| ROW2_3 | nvarchar | 68 | YES |  |
| ROW3_3 | nvarchar | 68 | YES |  |
| ROW4_3 | nvarchar | 68 | YES |  |
| ROW1_4 | nvarchar | 68 | YES |  |
| ROW2_4 | nvarchar | 68 | YES |  |
| ROW3_4 | nvarchar | 68 | YES |  |
| ROW4_4 | nvarchar | 68 | YES |  |
| EXTERNAL_KEY | nvarchar | 510 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_MULTI_READER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CTU_KEY | nvarchar | 16 | NO |  |
| ReaderNumber | smallint | 2 | NO |  |
| CredentialID | tinyint | 1 | YES |  |
| MulticredentialType | tinyint | 1 | YES |  |
| ReaderType | tinyint | 1 | YES |  |
| SpeakerDisabled | tinyint | 1 | YES |  |
| Encryptionkey | nvarchar | 100 | YES |  |
| Authenticationkey | nvarchar | 100 | YES |  |
| ReaderAddress | smallint | 2 | YES |  |
| RS485speed | tinyint | 1 | YES |  |
| TamperHWManagement | tinyint | 1 | YES |  |
| ReaderStatusHWManagement | tinyint | 1 | YES |  |
| ReaderStatusSWManagement | tinyint | 1 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_NO_COMPANY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| COMPANY_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 70 | NO |  |
| ADDRESS | nvarchar | 70 | YES |  |
| CITY | nvarchar | 40 | YES |  |
| COUNTRY | nvarchar | 40 | YES |  |
| CAP | nvarchar | 10 | YES |  |
| TELEPHONE | nvarchar | 40 | YES |  |
| FAX | nvarchar | 40 | YES |  |
| CONTACT | nvarchar | 70 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| PARAMETER_3 | nvarchar | 40 | YES |  |
| PARAMETER_4 | nvarchar | 40 | YES |  |
| PARAMETER_5 | nvarchar | 40 | YES |  |
| TAX_CODE | nvarchar | 40 | YES |  |
| CORPORATE_NAME | nvarchar | 70 | YES |  |
| E_MAIL_ADDR | nvarchar | 510 | YES |  |
| FLAG_1 | tinyint | 1 | YES |  |
| FLAG_2 | tinyint | 1 | YES |  |
| FLAG_3 | tinyint | 1 | YES |  |
| FLAG_4 | tinyint | 1 | YES |  |
| FLAG_5 | tinyint | 1 | YES |  |
| FLAG_CUSTOM | tinyint | 1 | YES |  |
| INHIBITION_REASON | nvarchar | 70 | YES |  |
| INHIBITION_FROM | nvarchar | 70 | YES |  |
| NUM_DOCUMENT | nvarchar | 20 | YES |  |
| FROM_DATE | datetime | 8 | YES |  |
| TO_DATE | datetime | 8 | YES |  |
| NUM_SHEET | nvarchar | 20 | YES |  |
| INHIBITION_DATE | datetime | 8 | YES |  |
| INHIBITION_NOTE | nvarchar | 510 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_NO_USER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SURNAME | nvarchar | 70 | NO |  |
| NAME | nvarchar | 50 | NO |  |
| USER_COMPANY | nvarchar | 70 | YES |  |
| BIRTH_PLACE | nvarchar | 40 | YES |  |
| BIRTH_COUNTRY | nvarchar | 40 | YES |  |
| BIRTH_DATE | datetime | 8 | NO |  |
| RESIDENCE_PLACE | nvarchar | 40 | YES |  |
| RESIDENCE_ADDRESS | nvarchar | 40 | YES |  |
| RESIDENCE_COUNTRY | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| PARAMETER_3 | nvarchar | 40 | YES |  |
| PARAMETER_4 | nvarchar | 40 | YES |  |
| PARAMETER_5 | nvarchar | 40 | YES |  |
| FLAG_1 | tinyint | 1 | YES |  |
| FLAG_2 | tinyint | 1 | YES |  |
| FLAG_3 | tinyint | 1 | YES |  |
| FLAG_4 | tinyint | 1 | YES |  |
| FLAG_5 | tinyint | 1 | YES |  |
| INHIBITION_REASON | nvarchar | 70 | YES |  |
| INHIBITION_FROM | nvarchar | 70 | YES |  |
| NUM_DOCUMENT | nvarchar | 20 | YES |  |
| FROM_DATE | datetime | 8 | YES |  |
| TO_DATE | datetime | 8 | YES |  |
| NUM_SHEET | nvarchar | 20 | YES |  |
| INHIBITION_DATE | datetime | 8 | YES |  |
| INHIBITION_NOTE | nvarchar | 510 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_PASS_PROG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| LAST_PASS_ID | int | 4 | YES |  |

## AC_POBJECT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| POBJECT_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| DISPLAY_TYPE | tinyint | 1 | YES |  |
| SHOW_SHORT_NAME | tinyint | 1 | YES |  |
| DFW_BB | int | 4 | YES |  |
| IDX_DYN_BB | int | 4 | YES |  |
| DFW_TRANSACTION | int | 4 | YES |  |
| IDX_DYN_TRANSACTION | int | 4 | YES |  |
| DFW_KO_TRANSACTION | int | 4 | YES |  |
| IDX_KO_DYN_TRANSACTION | int | 4 | YES |  |
| RT_DATE_ROW | tinyint | 1 | YES |  |
| RT_DATE_COL | tinyint | 1 | YES |  |
| RT_DAY_ROW | tinyint | 1 | YES |  |
| RT_DAY_COL | tinyint | 1 | YES |  |
| RT_SEPARATOR | nvarchar | 2 | YES |  |
| RT_MONTH_SIZE | tinyint | 1 | YES |  |
| RT_DAY_SIZE | tinyint | 1 | YES |  |
| RT_MONTH_TYPE | tinyint | 1 | YES |  |
| RT_DATE_FORMAT | tinyint | 1 | YES |  |
| RT_WDAY_SIZE | tinyint | 1 | YES |  |
| RT_WDAY_FORMAT | tinyint | 1 | YES |  |
| RT_YEAR_SIZE | tinyint | 1 | YES |  |
| RT_YEAR_LENGTH | tinyint | 1 | YES |  |
| RT_TIME_ROW | tinyint | 1 | YES |  |
| RT_TIME_COL | tinyint | 1 | YES |  |
| RT_AMPM_ROW | tinyint | 1 | YES |  |
| RT_AMPM_COL | tinyint | 1 | YES |  |
| RT_TIME_SEPARATOR | nvarchar | 2 | YES |  |
| RT_SECOND_SIZE | tinyint | 1 | YES |  |
| RT_MINUTE_SIZE | tinyint | 1 | YES |  |
| RT_HOUR_SIZE | tinyint | 1 | YES |  |
| RT_AMPM_PRESENCE | tinyint | 1 | YES |  |
| RT_SECOND_PRESENCE | tinyint | 1 | YES |  |
| BB_DATE_ROW | tinyint | 1 | YES |  |
| BB_DATE_COL | tinyint | 1 | YES |  |
| BB_DAY_ROW | tinyint | 1 | YES |  |
| BB_DAY_COL | tinyint | 1 | YES |  |
| BB_SEPARATOR | nvarchar | 2 | YES |  |
| BB_MONTH_SIZE | tinyint | 1 | YES |  |
| BB_DAY_SIZE | tinyint | 1 | YES |  |
| BB_MONTH_TYPE | tinyint | 1 | YES |  |
| BB_DATE_FORMAT | tinyint | 1 | YES |  |
| BB_WDAY_SIZE | tinyint | 1 | YES |  |
| BB_WDAY_FORMAT | tinyint | 1 | YES |  |
| BB_YEAR_SIZE | tinyint | 1 | YES |  |
| BB_YEAR_LENGTH | tinyint | 1 | YES |  |
| BB_TIME_ROW | tinyint | 1 | YES |  |
| BB_TIME_COL | tinyint | 1 | YES |  |
| BB_AMPM_ROW | tinyint | 1 | YES |  |
| BB_AMPM_COL | tinyint | 1 | YES |  |
| BB_TIME_SEPARATOR | nvarchar | 2 | YES |  |
| BB_SECOND_SIZE | tinyint | 1 | YES |  |
| BB_MINUTE_SIZE | tinyint | 1 | YES |  |
| BB_HOUR_SIZE | tinyint | 1 | YES |  |
| BB_AMPM_PRESENCE | tinyint | 1 | YES |  |
| BB_SECOND_PRESENCE | tinyint | 1 | YES |  |
| PRN_TYPE | tinyint | 1 | YES |  |
| PRN_TRANSACTION_CUT | tinyint | 1 | YES |  |
| PRN_ENQUIRY_CUT | tinyint | 1 | YES |  |
| PRN_DATE_FORMAT | tinyint | 1 | YES |  |
| PRN_TIME_FORMAT | tinyint | 1 | YES |  |
| PRN_TRANSACTION_LF | tinyint | 1 | YES |  |
| PRN_ENQUIRY_LF | tinyint | 1 | YES |  |
| PRN_TRANSACTION_HEADER | nvarchar | 80 | YES |  |
| PRN_ENQUIRY_HEADER | nvarchar | 80 | YES |  |
| ENQUIRY | nvarchar | 16 | YES |  |
| MSG_ID | smallint | 2 | YES |  |
| FUNCTION_CODE | tinyint | 1 | YES |  |
| REASON_KEY | nvarchar | 16 | YES |  |
| ENQUIRY_KEY | nvarchar | 16 | YES |  |
| TCATEGORY_KEY | nvarchar | 16 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| L1_SEPARATOR | nvarchar | 2 | YES |  |
| L1_MONTH_SIZE | tinyint | 1 | YES |  |
| L1_DAY_SIZE | tinyint | 1 | YES |  |
| L1_MONTH_TYPE | tinyint | 1 | YES |  |
| L1_DATE_FORMAT | tinyint | 1 | YES |  |
| L1_WDAY_SIZE | tinyint | 1 | YES |  |
| L1_WDAY_FORMAT | tinyint | 1 | YES |  |
| L1_YEAR_SIZE | tinyint | 1 | YES |  |
| L1_YEAR_LENGTH | tinyint | 1 | YES |  |
| L1_TIME_SEPARATOR | nvarchar | 2 | YES |  |
| L1_SECOND_SIZE | tinyint | 1 | YES |  |
| L1_MINUTE_SIZE | tinyint | 1 | YES |  |
| L1_HOUR_SIZE | tinyint | 1 | YES |  |
| L1_AMPM_PRESENCE | tinyint | 1 | YES |  |
| L1_SECOND_PRESENCE | tinyint | 1 | YES |  |
| L2_SEPARATOR | nvarchar | 2 | YES |  |
| L2_MONTH_SIZE | tinyint | 1 | YES |  |
| L2_DAY_SIZE | tinyint | 1 | YES |  |
| L2_MONTH_TYPE | tinyint | 1 | YES |  |
| L2_DATE_FORMAT | tinyint | 1 | YES |  |
| L2_WDAY_SIZE | tinyint | 1 | YES |  |
| L2_WDAY_FORMAT | tinyint | 1 | YES |  |
| L2_YEAR_SIZE | tinyint | 1 | YES |  |
| L2_YEAR_LENGTH | tinyint | 1 | YES |  |
| L2_TIME_SEPARATOR | nvarchar | 2 | YES |  |
| L2_SECOND_SIZE | tinyint | 1 | YES |  |
| L2_MINUTE_SIZE | tinyint | 1 | YES |  |
| L2_HOUR_SIZE | tinyint | 1 | YES |  |
| L2_AMPM_PRESENCE | tinyint | 1 | YES |  |
| L2_SECOND_PRESENCE | tinyint | 1 | YES |  |
| L3_SEPARATOR | nvarchar | 2 | YES |  |
| L3_MONTH_SIZE | tinyint | 1 | YES |  |
| L3_DAY_SIZE | tinyint | 1 | YES |  |
| L3_MONTH_TYPE | tinyint | 1 | YES |  |
| L3_DATE_FORMAT | tinyint | 1 | YES |  |
| L3_WDAY_SIZE | tinyint | 1 | YES |  |
| L3_WDAY_FORMAT | tinyint | 1 | YES |  |
| L3_YEAR_SIZE | tinyint | 1 | YES |  |
| L3_YEAR_LENGTH | tinyint | 1 | YES |  |
| L3_TIME_SEPARATOR | nvarchar | 2 | YES |  |
| L3_SECOND_SIZE | tinyint | 1 | YES |  |
| L3_MINUTE_SIZE | tinyint | 1 | YES |  |
| L3_HOUR_SIZE | tinyint | 1 | YES |  |
| L3_AMPM_PRESENCE | tinyint | 1 | YES |  |
| L3_SECOND_PRESENCE | tinyint | 1 | YES |  |
| L4_SEPARATOR | nvarchar | 2 | YES |  |
| L4_MONTH_SIZE | tinyint | 1 | YES |  |
| L4_DAY_SIZE | tinyint | 1 | YES |  |
| L4_MONTH_TYPE | tinyint | 1 | YES |  |
| L4_DATE_FORMAT | tinyint | 1 | YES |  |
| L4_WDAY_SIZE | tinyint | 1 | YES |  |
| L4_WDAY_FORMAT | tinyint | 1 | YES |  |
| L4_YEAR_SIZE | tinyint | 1 | YES |  |
| L4_YEAR_LENGTH | tinyint | 1 | YES |  |
| L4_TIME_SEPARATOR | nvarchar | 2 | YES |  |
| L4_SECOND_SIZE | tinyint | 1 | YES |  |
| L4_MINUTE_SIZE | tinyint | 1 | YES |  |
| L4_HOUR_SIZE | tinyint | 1 | YES |  |
| L4_AMPM_PRESENCE | tinyint | 1 | YES |  |
| L4_SECOND_PRESENCE | tinyint | 1 | YES |  |
| LANGUAGE_1 | nvarchar | 64 | YES |  |
| LANGUAGE_2 | nvarchar | 64 | YES |  |
| LANGUAGE_3 | nvarchar | 64 | YES |  |
| LANGUAGE_4 | nvarchar | 64 | YES |  |
| LANGUAGE_DEFAULT | tinyint | 1 | YES |  |
| NOTICE_1 | nvarchar | 100 | YES |  |
| NOTICE_2 | nvarchar | 100 | YES |  |
| NOTICE_3 | nvarchar | 100 | YES |  |
| NOTICE_4 | nvarchar | 100 | YES |  |
| INTERFACE_TYPE | tinyint | 1 | YES |  |
| LOGO | nvarchar | 100 | YES |  |
| STYLE | smallint | 2 | YES |  |
| ICON_LIBRARY | smallint | 2 | YES |  |
| TUNE_LIBRARY | smallint | 2 | YES |  |
| SPEAKER_ENABLED | smallint | 2 | YES |  |
| IDLE_TIMEOUT | smallint | 2 | YES |  |
| APP_TYPE | tinyint | 1 | YES |  |
| HOST_LANG_MAP1 | tinyint | 1 | YES |  |
| HOST_LANG_MAP2 | tinyint | 1 | YES |  |
| HOST_LANG_MAP3 | tinyint | 1 | YES |  |
| HOST_LANG_MAP4 | tinyint | 1 | YES |  |
| DISPLAY_HOST_COMM_FAILURE | smallint | 2 | NO |  |
| DISABLE_TRANSIT_DIRECTION_DISPLAY | smallint | 2 | NO |  |

## AC_POBJECT_FKEY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| POBJECT_ID | smallint | 2 | NO |  |
| FKEY_ID | tinyint | 1 | NO |  |
| FUNCTION_CODE | tinyint | 1 | YES |  |
| LANGUAGE_KEY | nvarchar | 16 | YES |  |
| MENU_KEY | nvarchar | 16 | YES |  |
| REASON_KEY | nvarchar | 16 | YES |  |
| ENQUIRY_KEY | nvarchar | 16 | YES |  |
| TCATEGORY_KEY | nvarchar | 16 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |
| ICON_ID | tinyint | 1 | YES |  |

## AC_POBJECT_ROW

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| POBJECT_ID | smallint | 2 | NO |  |
| ROW_ID | tinyint | 1 | NO |  |
| ROW_TEXT | nvarchar | 80 | YES |  |

## AC_PRESENT_IN_ZONE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CARD_NUMBER | nvarchar | 40 | YES |  |
| LAYOUT_ID | int | 4 | YES |  |
| TRANSIT_DATE | datetime | 8 | YES |  |
| SBI_TYPE | tinyint | 1 | NO |  |
| USER_TYPE | nvarchar | 48 | YES |  |
| SBI_ID | int | 4 | NO |  |
| CARD_ID | int | 4 | YES |  |
| SURNAME | nvarchar | 70 | NO |  |
| NAME | nvarchar | 50 | YES |  |
| IDENTIFIER | nvarchar | 40 | YES |  |
| ZONE | nvarchar | 16 | YES |  |
| TERMINAL | nvarchar | 16 | YES |  |
| REASON | nvarchar | 10 | YES |  |
| ACCESS_CONTROL_TYPE | tinyint | 1 | YES |  |
| TIME_ATTENDANCE_TYPE | tinyint | 1 | YES |  |
| CANTEEN_TYPE | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| STR_DIRECTION | nvarchar | 32 | YES |  |
| AC_TRANSIT_DATE | datetime | 8 | YES |  |
| AC_TERMINAL | nvarchar | 16 | YES |  |
| AC_DIRECTION | tinyint | 1 | YES |  |
| TA_TRANSIT_DATE | datetime | 8 | YES |  |
| TA_TERMINAL | nvarchar | 16 | YES |  |
| TA_DIRECTION | tinyint | 1 | YES |  |
| CA_TRANSIT_DATE | datetime | 8 | YES |  |
| CA_TERMINAL | nvarchar | 16 | YES |  |
| CA_DIRECTION | tinyint | 1 | YES |  |
| SAP_TRANSIT_DATE | datetime | 8 | YES |  |
| SAP_TERMINAL | nvarchar | 16 | YES |  |
| SAP_DIRECTION | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_PRESENT_IN_ZONE_NUM_RPT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| WS_NAME | nvarchar | 16 | NO |  |
| ZONE | nvarchar | 16 | NO |  |
| NUMPRESENT | bigint | 8 | NO |  |
| SITE_ACRONYM | nvarchar | 16 | NO |  |

## AC_PRESENT_IN_ZONE_RPT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| WS_NAME | nvarchar | 16 | NO |  |
| TRANSIT_DATE | datetime | 8 | NO |  |
| TYPE | tinyint | 1 | NO |  |
| SBI_ID | int | 4 | NO |  |
| SURNAME | nvarchar | 70 | NO |  |
| NAME | nvarchar | 50 | YES |  |
| IDENTIFIER | nvarchar | 40 | YES |  |
| ZONE | nvarchar | 16 | YES |  |
| TERMINAL | nvarchar | 16 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| LocationFullName | nvarchar | 400 | NO |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| ITALIAN | nvarchar | 510 | YES |  |
| ENGLISH | nvarchar | 510 | YES |  |
| CUSTOMIZED | nvarchar | 510 | YES |  |
| CUSTOMIZED2 | nvarchar | 510 | YES |  |

## AC_PRE_VISIT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PRE_VISIT_ID | int | 4 | NO |  |
| SBI_ID | int | 4 | NO |  |
| START_PRE_VALIDITY | datetime | 8 | YES |  |
| STOP_PRE_VALIDITY | datetime | 8 | YES |  |
| CLEAR_CODE | nvarchar | 32 | YES |  |
| START_VALIDITY_DATE | datetime | 8 | YES |  |
| END_VALIDITY_DATE | datetime | 8 | YES |  |
| TEMPLATE_ID | int | 4 | YES |  |
| REFERENCE_INDEXBOOK | int | 4 | YES |  |
| REFERENCE_AUTHORIZATION | tinyint | 1 | YES |  |
| VISIT_REASON | nvarchar | 70 | YES |  |
| VISIT_NOTE | nvarchar | 510 | YES |  |
| VISIT_DOCUMENT | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| PARAMETER_3 | nvarchar | 40 | YES |  |
| PARAMETER_4 | nvarchar | 40 | YES |  |
| PARAMETER_5 | nvarchar | 40 | YES |  |
| FLAG_1 | tinyint | 1 | YES |  |
| FLAG_2 | tinyint | 1 | YES |  |
| FLAG_3 | tinyint | 1 | YES |  |
| FLAG_4 | tinyint | 1 | YES |  |
| FLAG_5 | tinyint | 1 | YES |  |
| DATE_1 | datetime | 8 | YES |  |
| DATE_2 | datetime | 8 | YES |  |
| DATE_3 | datetime | 8 | YES |  |
| DATE_4 | datetime | 8 | YES |  |
| DATE_5 | datetime | 8 | YES |  |
| CATEGORY | tinyint | 1 | YES |  |
| EBI_ENABLE | bit | 1 | YES |  |
| SITE | smallint | 2 | NO |  |
| OWNER | int | 4 | YES |  |
| VISIT_END | datetime | 8 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| ALLOW_MULTI_VISITS | bit | 1 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_PRE_VISIT_PROG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| LAST_PRE_VISIT_ID | int | 4 | YES |  |

## AC_REASON

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PERIPHERAL_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| REASON_CODE | nvarchar | 10 | NO |  |
| PERIPHERAL_DESCRIPTION | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_2 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_3 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_4 | nvarchar | 64 | YES |  |
| DFW_REASON | smallint | 2 | NO |  |
| IDX_DYN_REASON | smallint | 2 | YES |  |
| REASON_ID | smallint | 2 | YES |  |
| FEEDBACK | smallint | 2 | YES |  |
| START_VALIDITY | datetime | 8 | YES |  |
| STOP_VALIDITY | datetime | 8 | YES |  |
| REASON_UNLOCK | tinyint | 1 | YES |  |
| REASON_TYPE | tinyint | 1 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |
| ATT_ABS_REASON_GRPG | nvarchar | 6 | YES |  |
| PS_GRPG_ATT_ABS_TYPE | nvarchar | 4 | YES |  |
| ES_GRPG_WORK_SCHED | nvarchar | 2 | YES |  |
| EXT_WAGETYPE_GRPG | nvarchar | 6 | YES |  |
| COUNTRY_GROUPING | nvarchar | 4 | YES |  |
| WAGETYPE_UNIT_ISO | nvarchar | 6 | YES |  |
| EXTERNAL_KEY | nvarchar | 510 | YES |  |
| EXTERNAL_SOURCE | tinyint | 1 | YES |  |
| ENABLE_TIME | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| REASON_DIRECTION | tinyint | 1 | NO |  |

## AC_RTU_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RTU_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| CTU_KEY | nvarchar | 16 | YES |  |
| RTU_TYPE | tinyint | 1 | YES |  |
| NEURON_ID | nvarchar | 36 | NO |  |
| MANUFACTURER_ID | nvarchar | 16 | YES |  |
| DEVICE_CLASS | nvarchar | 10 | YES |  |
| DEVICE_USAGE | nvarchar | 4 | YES |  |
| DEVICE_TRANSCEIVER | nvarchar | 4 | YES |  |
| MODEL | nvarchar | 4 | YES |  |
| LOCATION_STR | nvarchar | 12 | YES |  |
| TERMINAL_KEY | nvarchar | 16 | YES |  |
| MT_KEY | nvarchar | 16 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| LAYOUT_ID | tinyint | 1 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RESUME_FBK | smallint | 2 | YES |  |
| ELPASS_TYPE | tinyint | 1 | YES |  |
| ELPASS_EXCITER | tinyint | 1 | YES |  |
| RING_POSITION | tinyint | 1 | YES |  |
| FW | nvarchar | 510 | YES |  |
| CHIP | smallint | 2 | YES |  |
| CHIP_MINOR | smallint | 2 | YES |  |
| KEEP_ALIVE_HW | tinyint | 1 | YES |  |
| KEEP_ALIVE2_HW | tinyint | 1 | YES |  |
| KEEP_TAMPER_HW | tinyint | 1 | YES |  |
| KEEP_TAMPER2_HW | tinyint | 1 | YES |  |
| KEEP_ALIVE | tinyint | 1 | YES |  |
| KEEP_ALIVE2 | tinyint | 1 | YES |  |
| KEEP_TIMEOUT | smallint | 2 | YES |  |
| KEEP_RETRY | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_RTU_CFG_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RTU_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| CTU_KEY | nvarchar | 16 | YES |  |
| RTU_TYPE | tinyint | 1 | YES |  |
| NEURON_ID | nvarchar | 36 | NO |  |
| MANUFACTURER_ID | nvarchar | 16 | YES |  |
| DEVICE_CLASS | nvarchar | 10 | YES |  |
| DEVICE_USAGE | nvarchar | 4 | YES |  |
| DEVICE_TRANSCEIVER | nvarchar | 4 | YES |  |
| MODEL | nvarchar | 4 | YES |  |
| LOCATION_STR | nvarchar | 12 | YES |  |
| TERMINAL_KEY | nvarchar | 16 | YES |  |
| MT_KEY | nvarchar | 16 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| LAYOUT_ID | tinyint | 1 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RESUME_FBK | smallint | 2 | YES |  |
| ELPASS_TYPE | tinyint | 1 | YES |  |
| ELPASS_EXCITER | tinyint | 1 | YES |  |
| RING_POSITION | tinyint | 1 | YES |  |
| FW | nvarchar | 510 | YES |  |
| CHIP | smallint | 2 | YES |  |
| CHIP_MINOR | smallint | 2 | YES |  |
| KEEP_ALIVE_HW | tinyint | 1 | YES |  |
| KEEP_ALIVE2_HW | tinyint | 1 | YES |  |
| KEEP_TAMPER_HW | tinyint | 1 | YES |  |
| KEEP_TAMPER2_HW | tinyint | 1 | YES |  |
| KEEP_ALIVE | tinyint | 1 | YES |  |
| KEEP_ALIVE2 | tinyint | 1 | YES |  |
| KEEP_TIMEOUT | smallint | 2 | YES |  |
| KEEP_RETRY | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_RTU_HELP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| NEURON_ID | nvarchar | 36 | NO |  |
| MANUFACTURER_ID | nvarchar | 14 | YES |  |
| DEVICE_CLASS | nvarchar | 10 | YES |  |
| DEVICE_USAGE | nvarchar | 4 | YES |  |
| DEVICE_TRANSCEIVER | nvarchar | 4 | YES |  |
| MODEL | nvarchar | 4 | YES |  |

## AC_RTU_WIZARD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CTU_KEY | nvarchar | 16 | NO |  |
| NEURON_ID | nvarchar | 36 | NO |  |
| PROGRAM_ID | nvarchar | 46 | YES |  |

## AC_SAP_COSTCENTER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| COMP_CODE | nvarchar | 8 | YES |  |
| COSTCENTER | nvarchar | 20 | NO |  |
| COSTCENTER_GRP | nvarchar | 30 | YES |  |
| FROM_DATE | datetime | 8 | YES |  |
| TO_DATE | datetime | 8 | YES |  |
| COCNTR_TXT | nvarchar | 40 | YES |  |

## AC_SAP_EVENT_GROUP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| EVENT_GROUP_KEY | nvarchar | 10 | NO |  |

## AC_SAP_OBJECT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| OBJ_KEY | nvarchar | 24 | NO |  |
| OBJ_ID_GRP | nvarchar | 30 | YES |  |
| FROM_DATE | datetime | 8 | YES |  |
| TO_DATE | datetime | 8 | YES |  |
| OBJ_ID_TXT | nvarchar | 80 | YES |  |

## AC_SAP_ORDER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| COMP_CODE | nvarchar | 8 | YES |  |
| ORDER_ID | nvarchar | 24 | NO |  |
| ORDER_GRP | nvarchar | 30 | YES |  |
| ORDER_NAME | nvarchar | 80 | YES |  |

## AC_SAP_PROJECT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| COMP_CODE | nvarchar | 8 | YES |  |
| WBS_ELEMENT | nvarchar | 48 | NO |  |
| WBS_ELEMENT_GRP | nvarchar | 30 | YES |  |
| WBS_SHORTTEXT | nvarchar | 80 | YES |  |

## AC_SBI_CLASS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SBI_TYPE | tinyint | 1 | NO |  |
| SBI_ID | int | 4 | NO |  |
| CLASS_ID | smallint | 2 | NO |  |
| VALUE_KEY | nvarchar | 100 | YES |  |
| ASSET_ID | nvarchar | 510 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_SBI_PROG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| LAST_SBI_ID | int | 4 | YES |  |
| LAST_NEGATIVE_SBI_ID | int | 4 | YES |  |

## AC_SCHEDULED_CMD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CMD_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| CTU_START | nvarchar | 16 | YES |  |
| MONDAY_ENABLE | tinyint | 1 | YES |  |
| TUESDAY_ENABLE | tinyint | 1 | YES |  |
| WEDNESDAY_ENABLE | tinyint | 1 | YES |  |
| THURSDAY_ENABLE | tinyint | 1 | YES |  |
| FRIDAY_ENABLE | tinyint | 1 | YES |  |
| SATURDAY_ENABLE | tinyint | 1 | YES |  |
| SUNDAY_ENABLE | tinyint | 1 | YES |  |
| SPECIALDAY_ENABLE | tinyint | 1 | YES |  |
| HOLIDAY_ENABLE | tinyint | 1 | YES |  |
| START_TIME | datetime | 8 | YES |  |
| STOP_TIME | datetime | 8 | YES |  |
| REPRISE_TIME | datetime | 8 | YES |  |
| END_TIME | datetime | 8 | YES |  |
| FBK_IN | smallint | 2 | YES |  |
| FBK_OUT | smallint | 2 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_SESAMO_DEVICE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CTU_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | varchar | 132 | NO |  |
| SITE | smallint | 2 | YES |  |
| DEVICE_TYPE | tinyint | 1 | YES |  |
| CREDENTIAL_ID1 | tinyint | 1 | YES |  |
| CREDENTIAL_ID2 | tinyint | 1 | YES |  |
| MULTICREDENTIAL_TYPE | tinyint | 1 | YES |  |
| IS_AUTOMATIC_IP | tinyint | 1 | YES |  |
| DEVICE_NAME | varchar | 255 | YES |  |
| DHCP1_IP | nvarchar | 30 | YES |  |
| DHCP2_IP | nvarchar | 30 | YES |  |
| IP_ADDRESS | nvarchar | 30 | YES |  |
| ROUTER | nvarchar | 30 | YES |  |
| FORMAT_ID | tinyint | 1 | YES |  |
| POBJECT_ID | smallint | 2 | YES |  |
| APB_GROUP | smallint | 2 | YES |  |
| DEGRADED_MNG_ENABLE | tinyint | 1 | YES |  |
| DEGRADED_FBK | smallint | 2 | YES |  |
| DEGRADED_RESUME_FBK | smallint | 2 | YES |  |
| OVERWRITE_BUFFER | tinyint | 1 | YES |  |
| PRINTER_ENABLE | tinyint | 1 | YES |  |
| PRINTER_MODEL | tinyint | 1 | YES |  |
| PRINTER_BEHAVIOR | tinyint | 1 | YES |  |
| POLLING_CMD | nvarchar | 28 | YES |  |
| CUT_CMD | nvarchar | 28 | YES |  |
| RESET_DH_CMD | nvarchar | 28 | YES |  |
| SET_DH_CMD | nvarchar | 28 | YES |  |
| RESET_DW_CMD | nvarchar | 28 | YES |  |
| SET_DW_CMD | nvarchar | 28 | YES |  |
| SET_NORMAL_CMD | nvarchar | 28 | YES |  |
| MAX_COL_NUMBER | tinyint | 1 | YES |  |
| POLLING_RET_CODE | nvarchar | 4 | YES |  |
| MASK_POLLING_RET_CODE | nvarchar | 4 | YES |  |
| PAPER_OUT_RET_CODE | nvarchar | 4 | YES |  |
| MASK_PAPER_OUT_RET_CODE | nvarchar | 4 | YES |  |
| CANTEEN_APB1 | datetime | 8 | YES |  |
| CANTEEN_APB2 | datetime | 8 | YES |  |
| CANTEEN_APB3 | datetime | 8 | YES |  |
| CANTEEN_APB4 | datetime | 8 | YES |  |
| ENCRYPTION_P2P | tinyint | 1 | YES |  |
| STARTUP_FBK | smallint | 2 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RESUME_FBK | smallint | 2 | YES |  |
| TZ_TYPE | tinyint | 1 | YES |  |
| TZ_DELTA_ID | tinyint | 1 | YES |  |
| TZ_DELTA_GMT | smallint | 2 | YES |  |
| DST_ENABLE | tinyint | 1 | YES |  |
| TO_DST_TYPE | tinyint | 1 | YES |  |
| TO_DST_MM | tinyint | 1 | YES |  |
| TO_DST_WEEK | tinyint | 1 | YES |  |
| TO_DST_WDAY | tinyint | 1 | YES |  |
| TO_DST_FIX_DATE | datetime | 8 | YES |  |
| TO_DST_TIME | datetime | 8 | YES |  |
| TO_DST_DELTA | smallint | 2 | YES |  |
| TO_SOLAR_TYPE | tinyint | 1 | YES |  |
| TO_SOLAR_MM | tinyint | 1 | YES |  |
| TO_SOLAR_WEEK | tinyint | 1 | YES |  |
| TO_SOLAR_WDAY | tinyint | 1 | YES |  |
| TO_SOLAR_FIX_DATE | datetime | 8 | YES |  |
| TO_SOLAR_TIME | datetime | 8 | YES |  |
| TO_SOLAR_DELTA | smallint | 2 | YES |  |
| APP_VERSION | nvarchar | 1000 | YES |  |
| BOOT_VERSION | nvarchar | 1000 | YES |  |
| KERNEL_VERSION | nvarchar | 1000 | YES |  |
| HWDEVICE_VERSION | nvarchar | 1000 | YES |  |
| INPUT_TYPE | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| RS485_USAGE | tinyint | 1 | NO |  |
| RS485_ADDRESS | tinyint | 1 | NO |  |
| RS485_SPEED | tinyint | 1 | NO |  |
| RS485_DATA_BITS | tinyint | 1 | NO |  |
| RS485_STOP_BITS | tinyint | 1 | NO |  |
| RS485_PARITY | tinyint | 1 | NO |  |
| DOOR_MODULE_ADDRESS | tinyint | 1 | NO |  |
| DOOR_MODULE_MODEL | tinyint | 1 | NO |  |
| DOOR_MODULE_ONLINE_POLL_TIME | tinyint | 1 | NO |  |
| DOOR_MODULE_OFFLINE_POLL_TIME | tinyint | 1 | NO |  |
| DOOR_MODULE_POLL_RETRY | tinyint | 1 | NO |  |
| DOOR_MODULE_DATA_RETRY | tinyint | 1 | NO |  |
| NumReaders | tinyint | 1 | YES |  |
| LineType1 | tinyint | 1 | YES |  |
| LineType2 | tinyint | 1 | YES |  |
| LineType3 | tinyint | 1 | YES |  |
| LineType4 | tinyint | 1 | YES |  |
| LineType5 | tinyint | 1 | YES |  |
| LineType6 | tinyint | 1 | YES |  |
| LineType7 | tinyint | 1 | YES |  |
| LineType8 | tinyint | 1 | YES |  |
| Input1 | tinyint | 1 | YES |  |
| Input2 | tinyint | 1 | YES |  |
| Input3 | tinyint | 1 | YES |  |
| Input4 | tinyint | 1 | YES |  |
| TimeOut | tinyint | 1 | YES |  |
| Retries | tinyint | 1 | YES |  |
| LANGUAGE_FILENAME | nvarchar | 510 | YES |  |
| MasterKey | nvarchar | 510 | YES |  |
| MAINTAIN_CH_ZONE | tinyint | 1 | YES |  |

## AC_SESAMO_DOOR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| DOOR_ID | nvarchar | 16 | NO |  |
| DESCRIPTION | varchar | 132 | NO |  |
| SITE | smallint | 2 | YES |  |
| MODALITY | tinyint | 1 | YES |  |
| CHECK_ACCESS_CONTROL | tinyint | 1 | YES |  |
| CHECK_TIME_ATTENDANCE | tinyint | 1 | YES |  |
| CHECK_CANTEEN | tinyint | 1 | YES |  |
| CHECK_SAP | tinyint | 1 | YES |  |
| DOOR_TYPE | tinyint | 1 | YES |  |
| GATEWAY_TYPE | tinyint | 1 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| LOCK_TYPE | tinyint | 1 | YES |  |
| PULSE | smallint | 2 | YES |  |
| PULSE_EXTENSION | smallint | 2 | YES |  |
| LOCK_TIMEOUT | smallint | 2 | YES |  |
| OPEN_TIMEOUT | smallint | 2 | YES |  |
| PRE_ALARM_TIMEOUT | smallint | 2 | YES |  |
| ALARM_TIMEOUT | smallint | 2 | YES |  |
| TIME_OUT | smallint | 2 | YES |  |
| TIME_OUT_EXTENSION | smallint | 2 | YES |  |
| BOARDING_TIMEOUT | smallint | 2 | YES |  |
| ARRIVAL_ZONE | nvarchar | 16 | YES |  |
| DEPARTURE_ZONE | nvarchar | 16 | YES |  |
| SEND_TRANSIT_STATUS | tinyint | 1 | YES |  |
| FEEDBACK_BEHAVIOR_ENABLE | tinyint | 1 | YES |  |
| TRANSIT_ON_TRANSIT_IN_PROGRESS | tinyint | 1 | YES |  |
| GATE_DEGRADED | tinyint | 1 | YES |  |
| BUSY_IN_FBK | smallint | 2 | YES |  |
| BUSY_OUT_FBK | smallint | 2 | YES |  |
| GATE_END_BUSY_FBK | smallint | 2 | YES |  |
| ENTRY_ACCESS_GRANTED_FBK | smallint | 2 | YES |  |
| EXIT_ACCESS_GRANTED_FBK | smallint | 2 | YES |  |
| ACCESS_GRANTED_FBK | smallint | 2 | YES |  |
| OUT_ACCESS_GRANTED_FBK | smallint | 2 | YES |  |
| ACCESS_DENIED_FBK | smallint | 2 | YES |  |
| UNDER_DURESS_FBK | smallint | 2 | YES |  |
| NOT_HAPPENED_FBK | smallint | 2 | YES |  |
| NOT_SHUT_FBK | smallint | 2 | YES |  |
| NOT_SHUT_RETURN_FBK | smallint | 2 | YES |  |
| CROSSING_FBK | smallint | 2 | YES |  |
| CROSSING_RESUME_FBK | smallint | 2 | YES |  |
| FORCED_FBK | smallint | 2 | YES |  |
| FORCED_RESUME_FBK | smallint | 2 | YES |  |
| REQ_EXIT_FBK | smallint | 2 | YES |  |
| GATE_OPEN_FBK | smallint | 2 | YES |  |
| GATE_CLOSE_FBK | smallint | 2 | YES |  |
| EMERGENCY_FBK | smallint | 2 | YES |  |
| EMERGENCY_RESET_FBK | smallint | 2 | YES |  |
| GATE_LOCKED_FBK | smallint | 2 | YES |  |
| GATE_LOCKED_RETURN_FBK | smallint | 2 | YES |  |
| MNG_BEHAVIOR | tinyint | 1 | YES |  |
| BEHAVIOR_OK_FBK | smallint | 2 | YES |  |
| BEHAVIOR_KO_FBK | smallint | 2 | YES |  |
| MNG_TIME_PERIOD | tinyint | 1 | YES |  |
| TIME_PERIOD_OK_FBK | smallint | 2 | YES |  |
| TIME_PERIOD_KO_FBK | smallint | 2 | YES |  |
| MNG_AUTHORIZED_FUNCTION | tinyint | 1 | YES |  |
| AUTHORIZED_FUNCTION_OK_FBK | smallint | 2 | YES |  |
| AUTHORIZED_FUNCTION_KO_FBK | smallint | 2 | YES |  |
| ENABLE_TRANSIT_UNDER_DURESS | tinyint | 1 | YES |  |
| NO_OF_TRANSITS | tinyint | 1 | YES |  |
| EXIT_CONTROL_ENABLE | tinyint | 1 | YES |  |
| AVOID_PIN_OUT | tinyint | 1 | YES |  |
| AVOID_PIN_IN | tinyint | 1 | YES |  |
| MNG_APB | tinyint | 1 | YES |  |
| ANTIPASSBACK_TYPE | tinyint | 1 | YES |  |
| APB_OK_FBK | smallint | 2 | YES |  |
| APB_KO_FBK | smallint | 2 | YES |  |
| MNG_MAX_IN_AREA | tinyint | 1 | YES |  |
| MAX_IN_AREA_OK_FBK | smallint | 2 | YES |  |
| MAX_IN_AREA_KO_FBK | smallint | 2 | YES |  |
| ENABLE_2TRANSIT | tinyint | 1 | YES |  |
| MNG_PATH | tinyint | 1 | YES |  |
| GROUP_1 | tinyint | 1 | YES |  |
| GROUP_2 | tinyint | 1 | YES |  |
| GROUP_ENTRY | tinyint | 1 | YES |  |
| GROUP_EXIT | tinyint | 1 | YES |  |
| RULE_COND_ENTRY | tinyint | 1 | YES |  |
| RULE_COND_EXIT | tinyint | 1 | YES |  |
| RULE_TIME_ENTRY | smallint | 2 | YES |  |
| RULE_TIME_EXIT | smallint | 2 | YES |  |
| RULE_RESULT_ENTRY | tinyint | 1 | YES |  |
| RULE_RESULT_EXIT | tinyint | 1 | YES |  |
| GROUP_3 | tinyint | 1 | YES |  |
| GROUP_4 | tinyint | 1 | YES |  |
| PATH_CONTROL_TYPE | tinyint | 1 | YES |  |
| PATH_OK_FBK | smallint | 2 | YES |  |
| PATH_KO_FBK | smallint | 2 | YES |  |
| PERC_EMP | tinyint | 1 | YES |  |
| PERC_EXT | tinyint | 1 | YES |  |
| PERC_VEC | tinyint | 1 | YES |  |
| PERC_VIS | tinyint | 1 | YES |  |
| DIR_VISITATION | tinyint | 1 | YES |  |
| RANDOM_SEARCH_FBK | smallint | 2 | YES |  |
| SECURITY_BLOCK_FBK | smallint | 2 | YES |  |
| GT_ENABLE | tinyint | 1 | YES |  |
| GT_DO_ACTIVATE | nvarchar | 16 | YES |  |
| GT_FBK | smallint | 2 | YES |  |
| GT_CONTROL_ENABLE | tinyint | 1 | YES |  |
| SPECIAL_TYPE_1 | tinyint | 1 | YES |  |
| SPECIAL_OK1_FBK | smallint | 2 | YES |  |
| SPECIAL_NO1_FBK | smallint | 2 | YES |  |
| SPECIAL_TYPE_2 | tinyint | 1 | YES |  |
| SPECIAL_OK2_FBK | smallint | 2 | YES |  |
| SPECIAL_NO2_FBK | smallint | 2 | YES |  |
| GROUP_BM | varchar | 255 | YES |  |
| DEGRADED_MGR_ENABLE | tinyint | 1 | YES |  |
| DEGRADED_FBK | smallint | 2 | YES |  |
| DEGRADED_RESUME_FBK | smallint | 2 | YES |  |
| WS_ASSOCIATED | varchar | 8 | YES |  |
| TIMEOUT_SEMIAUT | smallint | 2 | YES |  |
| TIMEOUT_AUTHENTICATION | smallint | 2 | YES |  |
| SEMIAUT_FBK | smallint | 2 | YES |  |
| CHECK_OUT | tinyint | 1 | YES |  |
| MAX_NO_RETRIES | tinyint | 1 | YES |  |
| BLOCK_TIMEOUT | tinyint | 1 | YES |  |
| KEYBOARD_CODE | nvarchar | 12 | YES |  |
| END_BOARDING_PROC | tinyint | 1 | YES |  |
| ENABLE_TRACE | tinyint | 1 | YES |  |
| CTU_KEY | nvarchar | 16 | YES |  |
| PEER_CTU_KEY | nvarchar | 16 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| PRN_ENABLE | tinyint | 1 | YES |  |
| PRN_CONTENT | tinyint | 1 | YES |  |
| PRN_DIRECTION | tinyint | 1 | YES |  |
| PRN_REASON | varchar | 8 | YES |  |
| LAST_GRANTED_DATE | datetime | 8 | YES |  |
| GRANTED_DATE_ENABLE | tinyint | 1 | YES |  |
| RTA_ENABLE | smallint | 2 | NO |  |
| RTA_TIMEOUT | smallint | 2 | NO |  |
| VTERMINAL_ID_CTU | tinyint | 1 | YES |  |
| DBL_READ_FBK_ENABLE | smallint | 2 | YES |  |
| SHUNT_DOOR_AFTER_FBK | smallint | 2 | YES |  |
| DBL_READ_TIMEOUT | smallint | 2 | YES |  |
| DBL_READ_FBK | smallint | 2 | YES |  |
| Reader1 | tinyint | 1 | YES |  |
| Reader2 | tinyint | 1 | YES |  |

## AC_SESAMO_DOOR_GATE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| DOOR_ID | nvarchar | 16 | NO |  |
| DIGITAL_ID | varchar | 3 | NO |  |
| CTU_KEY | varchar | 8 | YES |  |
| ADDRESS | tinyint | 1 | YES |  |
| NORMALITY | tinyint | 1 | YES |  |
| DELAYED | smallint | 2 | YES |  |
| LATCH | tinyint | 1 | YES |  |

## AC_SGR_GROUP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| GROUP_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_SGR_GROUP_ITEM

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| GROUP_ID | smallint | 2 | NO |  |
| ITEM_ID | tinyint | 1 | NO |  |
| ITEM_TYPE | tinyint | 1 | YES |  |
| REASON_KEY | nvarchar | 16 | YES |  |
| ENQUIRY_KEY | nvarchar | 16 | YES |  |
| TCATEGORY_KEY | nvarchar | 16 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |
| FBK_ID | smallint | 2 | YES |  |

## AC_SHOW_EVENT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_SHOW | int | 4 | NO |  |
| DESCRIPTION | nvarchar | 510 | YES |  |
| SHOW_TYPE | smallint | 2 | YES |  |
| SHOW_NUMBER | int | 4 | YES |  |
| START_VALIDITY | datetime | 8 | YES |  |
| END_VALIDITY | datetime | 8 | YES |  |

## AC_SHOW_EVENT_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_SHOW | int | 4 | NO |  |
| RANGE_ID | smallint | 2 | NO |  |
| SERVER_ID | smallint | 2 | NO |  |
| ROW_ID | smallint | 2 | YES |  |
| TEMPLATE_ID | smallint | 2 | YES |  |

## AC_SITE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SITE | smallint | 2 | NO |  |
| ACRONYM | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| CALENDAR_ID | tinyint | 1 | YES |  |
| SERVER | smallint | 2 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_TCATEGORY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TCATEGORY_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| PERIPHERAL_DESCRIPTION | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_2 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_3 | nvarchar | 64 | YES |  |
| PERIPHERAL_DESCRIPTION_4 | nvarchar | 64 | YES |  |
| DISPLAY_TYPE | tinyint | 1 | YES |  |
| INTERFACE_TYPE | tinyint | 1 | YES |  |
| TCATEGORY_ID | smallint | 2 | NO |  |
| GENERIC_LABEL | nvarchar | 6 | YES |  |
| ENTRY_LABEL | nvarchar | 6 | YES |  |
| EXIT_LABEL | nvarchar | 6 | YES |  |
| DIRECTION_DRIVER | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_TCATEGORY_FKEY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TCATEGORY_KEY | nvarchar | 16 | NO |  |
| FKEY_ID | tinyint | 1 | NO |  |
| FUNCTION_CODE | nvarchar | 16 | YES |  |
| LANGUAGE_KEY | nvarchar | 16 | YES |  |
| MENU_KEY | nvarchar | 16 | YES |  |
| REASON_KEY | nvarchar | 16 | YES |  |
| ENQUIRY_KEY | nvarchar | 16 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |
| ICON_ID | tinyint | 1 | YES |  |

## AC_TIMEPERIOD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TIMEPERIOD_ID | smallint | 2 | NO |  |
| CTU_TIMEPERIOD_ID | tinyint | 1 | YES |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| START_TIME | datetime | 8 | YES |  |
| STOP_TIME | datetime | 8 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_VISIT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SBI_ID | int | 4 | NO |  |
| VISIT_STATUS | tinyint | 1 | YES |  |
| NUMBER_PASS | int | 4 | YES |  |
| CLEAR_CODE | nvarchar | 40 | YES |  |
| START_VALIDITY_DATE | datetime | 8 | YES |  |
| END_VALIDITY_DATE | datetime | 8 | YES |  |
| TEMPLATE_ID | int | 4 | YES |  |
| REFERENCE_INDEXBOOK | int | 4 | YES |  |
| REFERENCE_AUTHORIZATION | tinyint | 1 | YES |  |
| VISIT_START | datetime | 8 | NO |  |
| VISIT_END | datetime | 8 | YES |  |
| VISIT_REASON | nvarchar | 70 | YES |  |
| VISIT_NOTE | nvarchar | 510 | YES |  |
| VISIT_DOCUMENT | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| PARAMETER_3 | nvarchar | 40 | YES |  |
| PARAMETER_4 | nvarchar | 40 | YES |  |
| PARAMETER_5 | nvarchar | 40 | YES |  |
| FLAG_1 | tinyint | 1 | YES |  |
| FLAG_2 | tinyint | 1 | YES |  |
| FLAG_3 | tinyint | 1 | YES |  |
| FLAG_4 | tinyint | 1 | YES |  |
| FLAG_5 | tinyint | 1 | YES |  |
| DATE_1 | datetime | 8 | YES |  |
| DATE_2 | datetime | 8 | YES |  |
| DATE_3 | datetime | 8 | YES |  |
| DATE_4 | datetime | 8 | YES |  |
| DATE_5 | datetime | 8 | YES |  |
| WS_KEY | nvarchar | 16 | YES |  |
| CATEGORY | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| PRE_VISIT_ID | int | 4 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## AC_VTERMINAL

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| VTERMINAL_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| VTERMINAL_ID_CTU | tinyint | 1 | YES |  |
| VTERMINAL_TYPE | tinyint | 1 | YES |  |
| CHECK_ACCESS_CONTROL | tinyint | 1 | YES |  |
| CHECK_TIME_ATTENDANCE | tinyint | 1 | YES |  |
| CHECK_CANTEEN | tinyint | 1 | YES |  |
| CHECK_SAP | tinyint | 1 | YES |  |
| LAYOUT_ID | tinyint | 1 | YES |  |
| MODALITY | tinyint | 1 | YES |  |
| EXIT_CONTROL_ENABLE | tinyint | 1 | YES |  |
| KEYBOARD_CODE | nvarchar | 12 | YES |  |
| DEGRADED_MGR_ENABLE | tinyint | 1 | YES |  |
| DEGRADED_FBK | smallint | 2 | YES |  |
| DEGRADED_RESUME_FBK | smallint | 2 | YES |  |
| NODE | nvarchar | 16 | NO |  |
| GATEWAY_TYPE | tinyint | 1 | YES |  |
| GATE_DEGRADED | tinyint | 1 | YES |  |
| IMPULSE | smallint | 2 | YES |  |
| TIME_OUT | smallint | 2 | YES |  |
| LOCK_TIMEOUT | smallint | 2 | YES |  |
| OPEN_TIMEOUT | smallint | 2 | YES |  |
| PRE_ALARM_TIMEOUT | smallint | 2 | YES |  |
| ALARM_TIMEOUT | smallint | 2 | YES |  |
| UNDER_DURESS_FBK | smallint | 2 | YES |  |
| NOT_HAPPENED_FBK | smallint | 2 | YES |  |
| CROSSING_FBK | smallint | 2 | YES |  |
| CROSSING_RESUME_FBK | smallint | 2 | YES |  |
| ARRIVAL_ZONE | nvarchar | 16 | YES |  |
| DEPARTURE_ZONE | nvarchar | 16 | YES |  |
| ANTIPASSBACK_TYPE | tinyint | 1 | YES |  |
| APB_TIME | smallint | 2 | YES |  |
| PATH_CONTROL_TYPE | tinyint | 1 | YES |  |
| GROUP_1 | tinyint | 1 | YES |  |
| GROUP_2 | tinyint | 1 | YES |  |
| GROUP_3 | tinyint | 1 | YES |  |
| GROUP_4 | tinyint | 1 | YES |  |
| MULTI_GATE_FBK | smallint | 2 | YES |  |
| ACCESS_DENIED_FBK | smallint | 2 | YES |  |
| FORCED_FBK | smallint | 2 | YES |  |
| FORCED_RESUME_FBK | smallint | 2 | YES |  |
| ACCESS_GRANTED_FBK | smallint | 2 | YES |  |
| OUT_ACCESS_GRANTED_FBK | smallint | 2 | YES |  |
| FBK_BEHAVIOR_ENABLE | tinyint | 1 | YES |  |
| LAST_GRANTED_DATE | datetime | 8 | YES |  |
| GRANTED_DATE_ENABLE | tinyint | 1 | YES |  |
| TYPE_COMPOSITION | tinyint | 1 | YES |  |
| WS_ASSOCIATED | nvarchar | 16 | YES |  |
| ENABLE_2TRANSIT | tinyint | 1 | YES |  |
| ENABLE_ALLOWED | tinyint | 1 | YES |  |
| CHECK_ASSET | tinyint | 1 | YES |  |
| CHECK_OUT | tinyint | 1 | YES |  |
| TIMEOUT_SEMIAUT | smallint | 2 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| POBJECT | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| MNG_TYPE | tinyint | 1 | YES |  |
| MNG_TIME_PERIOD | tinyint | 1 | YES |  |
| MNG_BEHAVIOR | tinyint | 1 | YES |  |
| MNG_APB | tinyint | 1 | YES |  |
| MNG_PATH | tinyint | 1 | YES |  |
| MNG_MAX_IN_AREA | tinyint | 1 | YES |  |
| TYPE_OK_FBK | smallint | 2 | YES |  |
| TYPE_KO_FBK | smallint | 2 | YES |  |
| TIME_PERIOD_OK_FBK | smallint | 2 | YES |  |
| TIME_PERIOD_KO_FBK | smallint | 2 | YES |  |
| BEHAVIOR_OK_FBK | smallint | 2 | YES |  |
| BEHAVIOR_KO_FBK | smallint | 2 | YES |  |
| APB_OK_FBK | smallint | 2 | YES |  |
| APB_KO_FBK | smallint | 2 | YES |  |
| PATH_OK_FBK | smallint | 2 | YES |  |
| PATH_KO_FBK | smallint | 2 | YES |  |
| MAX_IN_AREA_OK_FBK | smallint | 2 | YES |  |
| MAX_IN_AREA_KO_FBK | smallint | 2 | YES |  |
| PRN_ENABLE | tinyint | 1 | YES |  |
| PRN_CONTENT | tinyint | 1 | YES |  |
| PRN_DIRECTION | tinyint | 1 | YES |  |
| PRN_REASON | nvarchar | 16 | YES |  |
| ENABLE_BUSY | tinyint | 1 | YES |  |
| BUSY_IN_FBK | smallint | 2 | YES |  |
| BUSY_OUT_FBK | smallint | 2 | YES |  |
| AVOID_PIN_IN | tinyint | 1 | YES |  |
| AVOID_PIN_OUT | tinyint | 1 | YES |  |
| AVOID_TRANSIT | tinyint | 1 | YES |  |
| RULE_GROUP_ENTRY | tinyint | 1 | YES |  |
| RULE_COND_ENTRY | tinyint | 1 | YES |  |
| RULE_RESULT_ENTRY | tinyint | 1 | YES |  |
| RULE_TIME_ENTRY | smallint | 2 | YES |  |
| RULE_GROUP_EXIT | tinyint | 1 | YES |  |
| RULE_COND_EXIT | tinyint | 1 | YES |  |
| RULE_RESULT_EXIT | tinyint | 1 | YES |  |
| RULE_TIME_EXIT | smallint | 2 | YES |  |
| ENABLE_TRACE | tinyint | 1 | YES |  |
| BOARDING_TIMEOUT | smallint | 2 | YES |  |
| REQ_EXIT_FBK | smallint | 2 | YES |  |
| NO_SHUT_FBK | smallint | 2 | YES |  |
| NO_SHUT_RET_FBK | smallint | 2 | YES |  |
| PERC_EMP | tinyint | 1 | YES |  |
| PERC_EXT | tinyint | 1 | YES |  |
| PERC_VEH | tinyint | 1 | YES |  |
| PERC_VIS | tinyint | 1 | YES |  |
| DIR_VISITATION | tinyint | 1 | YES |  |
| RANDOM_SEARCH_FBK | smallint | 2 | YES |  |
| SECURITY_BLOCK_FBK | smallint | 2 | YES |  |
| GT_ENABLE | tinyint | 1 | YES |  |
| GT_DO_ACTIVE | nvarchar | 16 | YES |  |
| GT_FBK | smallint | 2 | YES |  |
| GT_CONTROL_ENABLE | tinyint | 1 | YES |  |
| SPECIAL_TYPE_1 | tinyint | 1 | YES |  |
| SPECIAL_OK1_FBK | smallint | 2 | YES |  |
| SPECIAL_NO1_FBK | smallint | 2 | YES |  |
| SPECIAL_TYPE_2 | tinyint | 1 | YES |  |
| SPECIAL_OK2_FBK | smallint | 2 | YES |  |
| SPECIAL_NO2_FBK | smallint | 2 | YES |  |
| SEMIAUT_FBK | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| GROUP_BM | nvarchar | 510 | YES |  |
| GATE_END_BUSY_FBK | smallint | 2 | YES |  |
| GATE_OPEN_FBK | smallint | 2 | YES |  |
| GATE_CLOSE_FBK | smallint | 2 | YES |  |
| EMERGENCY_FBK | smallint | 2 | YES |  |
| EMERGENCY_RESET_FBK | smallint | 2 | YES |  |
| GATE_NOT_SEC_FBK | smallint | 2 | YES |  |
| GATE_NOT_SEC_RTN_FBK | smallint | 2 | YES |  |
| GATE_UNLOCK_FBK | smallint | 2 | YES |  |
| GATE_UNLOCK_RTN_FBK | smallint | 2 | YES |  |
| GATE_LOCK_ANOMALY_FBK | smallint | 2 | YES |  |
| GATE_ALARM_FBK | smallint | 2 | YES |  |
| GATE_ALARM_RTN_FBK | smallint | 2 | YES |  |
| DBL_READ_FBK_ENABLE | smallint | 2 | NO |  |
| DBL_READ_DTC_ENABLE | smallint | 2 | NO |  |
| DBL_READ_TIMEOUT | smallint | 2 | NO |  |
| DBL_READ_FBK | smallint | 2 | YES |  |
| TIMEOUT_AUTHENTICATION | smallint | 2 | YES |  |
| FLAGS | smallint | 2 | YES |  |

## AC_VTERMINAL_GATE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| VTERMINAL_KEY | nvarchar | 16 | NO |  |
| DIGITAL_ID | nvarchar | 6 | NO |  |
| RTU_KEY | nvarchar | 16 | YES |  |
| ADDRESS | tinyint | 1 | YES |  |
| DELAYED | smallint | 2 | YES |  |
| LATCH | tinyint | 1 | YES |  |

## AC_VTERMINAL_GATE_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| VTERMINAL_KEY | nvarchar | 16 | NO |  |
| DIGITAL_ID | nvarchar | 6 | NO |  |
| RTU_KEY | nvarchar | 16 | YES |  |
| ADDRESS | tinyint | 1 | YES |  |
| DELAYED | smallint | 2 | YES |  |
| LATCH | tinyint | 1 | YES |  |

## AC_VTERMINAL_TRANSIT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| Terminal | nvarchar | 16 | NO |  |
| SbiType | tinyint | 1 | NO |  |
| SbiID | int | 4 | NO |  |
| CardID | int | 4 | NO |  |
| CardNumber | nvarchar | 40 | NO |  |
| LayoutID | tinyint | 1 | NO |  |
| Direction | tinyint | 1 | NO |  |
| Identifier | nvarchar | 40 | YES |  |
| LastTransitDateTime | datetime | 8 | YES |  |
| Transit_Status_ID | tinyint | 1 | YES |  |
| Transit_Status_String | nvarchar | 40 | YES |  |
| ZoneName | nvarchar | 16 | NO |  |
| Granted | tinyint | 1 | NO |  |

## AC_VTERMINAL_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| VTERMINAL_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| VTERMINAL_ID_CTU | tinyint | 1 | YES |  |
| VTERMINAL_TYPE | tinyint | 1 | YES |  |
| CHECK_ACCESS_CONTROL | tinyint | 1 | YES |  |
| CHECK_TIME_ATTENDANCE | tinyint | 1 | YES |  |
| CHECK_CANTEEN | tinyint | 1 | YES |  |
| CHECK_SAP | tinyint | 1 | YES |  |
| LAYOUT_ID | tinyint | 1 | YES |  |
| MODALITY | tinyint | 1 | YES |  |
| EXIT_CONTROL_ENABLE | tinyint | 1 | YES |  |
| KEYBOARD_CODE | nvarchar | 12 | YES |  |
| DEGRADED_MGR_ENABLE | tinyint | 1 | YES |  |
| DEGRADED_FBK | smallint | 2 | YES |  |
| DEGRADED_RESUME_FBK | smallint | 2 | YES |  |
| NODE | nvarchar | 16 | NO |  |
| GATEWAY_TYPE | tinyint | 1 | YES |  |
| GATE_DEGRADED | tinyint | 1 | YES |  |
| IMPULSE | smallint | 2 | YES |  |
| TIME_OUT | smallint | 2 | YES |  |
| LOCK_TIMEOUT | smallint | 2 | YES |  |
| OPEN_TIMEOUT | smallint | 2 | YES |  |
| PRE_ALARM_TIMEOUT | smallint | 2 | YES |  |
| ALARM_TIMEOUT | smallint | 2 | YES |  |
| UNDER_DURESS_FBK | smallint | 2 | YES |  |
| NOT_HAPPENED_FBK | smallint | 2 | YES |  |
| CROSSING_FBK | smallint | 2 | YES |  |
| CROSSING_RESUME_FBK | smallint | 2 | YES |  |
| ARRIVAL_ZONE | nvarchar | 16 | YES |  |
| DEPARTURE_ZONE | nvarchar | 16 | YES |  |
| ANTIPASSBACK_TYPE | tinyint | 1 | YES |  |
| APB_TIME | smallint | 2 | YES |  |
| PATH_CONTROL_TYPE | tinyint | 1 | YES |  |
| GROUP_1 | tinyint | 1 | YES |  |
| GROUP_2 | tinyint | 1 | YES |  |
| GROUP_3 | tinyint | 1 | YES |  |
| GROUP_4 | tinyint | 1 | YES |  |
| MULTI_GATE_FBK | smallint | 2 | YES |  |
| ACCESS_DENIED_FBK | smallint | 2 | YES |  |
| FORCED_FBK | smallint | 2 | YES |  |
| FORCED_RESUME_FBK | smallint | 2 | YES |  |
| ACCESS_GRANTED_FBK | smallint | 2 | YES |  |
| OUT_ACCESS_GRANTED_FBK | smallint | 2 | YES |  |
| FBK_BEHAVIOR_ENABLE | tinyint | 1 | YES |  |
| LAST_GRANTED_DATE | datetime | 8 | YES |  |
| GRANTED_DATE_ENABLE | tinyint | 1 | YES |  |
| TYPE_COMPOSITION | tinyint | 1 | YES |  |
| WS_ASSOCIATED | nvarchar | 16 | YES |  |
| ENABLE_2TRANSIT | tinyint | 1 | YES |  |
| ENABLE_ALLOWED | tinyint | 1 | YES |  |
| CHECK_ASSET | tinyint | 1 | YES |  |
| CHECK_OUT | tinyint | 1 | YES |  |
| TIMEOUT_SEMIAUT | smallint | 2 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| POBJECT | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| MNG_TYPE | tinyint | 1 | YES |  |
| MNG_TIME_PERIOD | tinyint | 1 | YES |  |
| MNG_BEHAVIOR | tinyint | 1 | YES |  |
| MNG_APB | tinyint | 1 | YES |  |
| MNG_PATH | tinyint | 1 | YES |  |
| MNG_MAX_IN_AREA | tinyint | 1 | YES |  |
| TYPE_OK_FBK | smallint | 2 | YES |  |
| TYPE_KO_FBK | smallint | 2 | YES |  |
| TIME_PERIOD_OK_FBK | smallint | 2 | YES |  |
| TIME_PERIOD_KO_FBK | smallint | 2 | YES |  |
| BEHAVIOR_OK_FBK | smallint | 2 | YES |  |
| BEHAVIOR_KO_FBK | smallint | 2 | YES |  |
| APB_OK_FBK | smallint | 2 | YES |  |
| APB_KO_FBK | smallint | 2 | YES |  |
| PATH_OK_FBK | smallint | 2 | YES |  |
| PATH_KO_FBK | smallint | 2 | YES |  |
| MAX_IN_AREA_OK_FBK | smallint | 2 | YES |  |
| MAX_IN_AREA_KO_FBK | smallint | 2 | YES |  |
| PRN_ENABLE | tinyint | 1 | YES |  |
| PRN_CONTENT | tinyint | 1 | YES |  |
| PRN_DIRECTION | tinyint | 1 | YES |  |
| PRN_REASON | nvarchar | 16 | YES |  |
| ENABLE_BUSY | tinyint | 1 | YES |  |
| BUSY_IN_FBK | smallint | 2 | YES |  |
| BUSY_OUT_FBK | smallint | 2 | YES |  |
| AVOID_PIN_IN | tinyint | 1 | YES |  |
| AVOID_PIN_OUT | tinyint | 1 | YES |  |
| AVOID_TRANSIT | tinyint | 1 | YES |  |
| RULE_GROUP_ENTRY | tinyint | 1 | YES |  |
| RULE_COND_ENTRY | tinyint | 1 | YES |  |
| RULE_RESULT_ENTRY | tinyint | 1 | YES |  |
| RULE_TIME_ENTRY | smallint | 2 | YES |  |
| RULE_GROUP_EXIT | tinyint | 1 | YES |  |
| RULE_COND_EXIT | tinyint | 1 | YES |  |
| RULE_RESULT_EXIT | tinyint | 1 | YES |  |
| RULE_TIME_EXIT | smallint | 2 | YES |  |
| ENABLE_TRACE | tinyint | 1 | YES |  |
| BOARDING_TIMEOUT | smallint | 2 | YES |  |
| REQ_EXIT_FBK | smallint | 2 | YES |  |
| NO_SHUT_FBK | smallint | 2 | YES |  |
| NO_SHUT_RET_FBK | smallint | 2 | YES |  |
| PERC_EMP | tinyint | 1 | YES |  |
| PERC_EXT | tinyint | 1 | YES |  |
| PERC_VEH | tinyint | 1 | YES |  |
| PERC_VIS | tinyint | 1 | YES |  |
| DIR_VISITATION | tinyint | 1 | YES |  |
| RANDOM_SEARCH_FBK | smallint | 2 | YES |  |
| SECURITY_BLOCK_FBK | smallint | 2 | YES |  |
| GT_ENABLE | tinyint | 1 | YES |  |
| GT_DO_ACTIVE | nvarchar | 16 | YES |  |
| GT_FBK | smallint | 2 | YES |  |
| GT_CONTROL_ENABLE | tinyint | 1 | YES |  |
| SPECIAL_TYPE_1 | tinyint | 1 | YES |  |
| SPECIAL_OK1_FBK | smallint | 2 | YES |  |
| SPECIAL_NO1_FBK | smallint | 2 | YES |  |
| SPECIAL_TYPE_2 | tinyint | 1 | YES |  |
| SPECIAL_OK2_FBK | smallint | 2 | YES |  |
| SPECIAL_NO2_FBK | smallint | 2 | YES |  |
| SEMIAUT_FBK | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| GROUP_BM | nvarchar | 510 | YES |  |
| GATE_END_BUSY_FBK | smallint | 2 | YES |  |
| GATE_OPEN_FBK | smallint | 2 | YES |  |
| GATE_CLOSE_FBK | smallint | 2 | YES |  |
| EMERGENCY_FBK | smallint | 2 | YES |  |
| EMERGENCY_RESET_FBK | smallint | 2 | YES |  |
| GATE_NOT_SEC_FBK | smallint | 2 | YES |  |
| GATE_NOT_SEC_RTN_FBK | smallint | 2 | YES |  |
| GATE_UNLOCK_FBK | smallint | 2 | YES |  |
| GATE_UNLOCK_RTN_FBK | smallint | 2 | YES |  |
| GATE_LOCK_ANOMALY_FBK | smallint | 2 | YES |  |
| GATE_ALARM_FBK | smallint | 2 | YES |  |
| GATE_ALARM_RTN_FBK | smallint | 2 | YES |  |

## AC_ZONE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ZONE_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| ZONE_ID | tinyint | 1 | NO |  |
| ZONE_LEVEL | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| EXTERNAL_ZONE_ENABLE | tinyint | 1 | YES |  |
| CK_MAX_PRES_ENABLE | tinyint | 1 | YES |  |
| TX_MAX_PRES_ENABLE | tinyint | 1 | YES |  |
| CK_MIN_PRES_ENABLE | tinyint | 1 | YES |  |
| TX_MIN_PRES_ENABLE | tinyint | 1 | YES |  |
| CK_TIME_PREALARM_ENABLE | tinyint | 1 | YES |  |
| CK_TIME_ALARM_ENABLE | tinyint | 1 | YES |  |
| MIN_PRESENCE | smallint | 2 | YES |  |
| MIN_PRESENT_FBK | smallint | 2 | YES |  |
| MIN_PRESENT_RES_FBK | smallint | 2 | YES |  |
| MAX_PRESENCE | smallint | 2 | YES |  |
| MAX_PRESENT_FBK | smallint | 2 | YES |  |
| MAX_PRESENT_RES_FBK | smallint | 2 | YES |  |
| TIME_PREALARM_FBK | smallint | 2 | YES |  |
| TIME_ALARM_FBK | smallint | 2 | YES |  |
| TOLERANCE_MIN_EMISSION | smallint | 2 | YES |  |
| TOLERANCE_MIN_RIENTRE | smallint | 2 | YES |  |
| PREALARM_LIMIT | smallint | 2 | YES |  |
| ALARM_LIMIT | smallint | 2 | YES |  |
| ZONE_INTRUSION | tinyint | 1 | YES |  |
| ARM_FBK | smallint | 2 | YES |  |
| DISARM_FBK | smallint | 2 | YES |  |
| RESET_APB_ENABLE | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## AC_ZONE_PLAN

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ZONE_KEY | nvarchar | 16 | NO |  |
| PLAN_ID | tinyint | 1 | NO |  |
| MONDAY_ENABLE | tinyint | 1 | YES |  |
| TUESDAY_ENABLE | tinyint | 1 | YES |  |
| WEDNESDAY_ENABLE | tinyint | 1 | YES |  |
| THURSDAY_ENABLE | tinyint | 1 | YES |  |
| FRIDAY_ENABLE | tinyint | 1 | YES |  |
| SATURDAY_ENABLE | tinyint | 1 | YES |  |
| SUNDAY_ENABLE | tinyint | 1 | YES |  |
| SPECIALDAY_ENABLE | tinyint | 1 | YES |  |
| HOLIDAY_ENABLE | tinyint | 1 | YES |  |
| START_TIME | datetime | 8 | YES |  |
| STOP_TIME | datetime | 8 | YES |  |
| REPRISE_TIME | datetime | 8 | YES |  |
| END_TIME | datetime | 8 | YES |  |

## AssignedCHAccessLevels

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| rowguid | uniqueidentifier | 16 | NO |  |
| SbiID | int | 4 | NO |  |
| ServerRecordNumber | int | 4 | NO |  |
| ServerID | smallint | 2 | NO |  |
| CommencementDateTime | datetime | 8 | NO |  |
| ExpiryDateTime | datetime | 8 | NO |  |
| IsDisabled | bit | 1 | NO |  |
| StateID | tinyint | 1 | NO |  |
| Comment | nvarchar | -1 | NO |  |

## CHLocalInformation

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| LastAccessDateTime | datetime | 8 | YES |  |
| LastDoorName | nvarchar | 100 | NO |  |
| LastEvtMessage | nvarchar | 40 | NO |  |
| LastZoneID | smallint | 2 | NO |  |
| LastZoneName | nvarchar | 80 | NO |  |

## Card

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| AcsBarCode | nvarchar | 40 | NO |  |
| AcsMagStripe | nvarchar | 40 | NO |  |
| AffiliationCode | smallint | 2 | NO |  |
| AllowAccessOnLossOfComs | bit | 1 | NO |  |
| AttAbsReasonGrpg | nvarchar | 6 | NO |  |
| BackCardLayout | nvarchar | 510 | NO |  |
| BuildingEntryExit | bit | 1 | NO |  |
| CardClassA | bit | 1 | NO |  |
| CardClassB | bit | 1 | NO |  |
| CardID | int | 4 | NO |  |
| CardNumber | nvarchar | 40 | NO |  |
| CardNumberNumeric | decimal | 13 | NO |  |
| CardType | tinyint | 1 | NO |  |
| CommencementDateTime | datetime | 8 | NO |  |
| Category | tinyint | 1 | NO |  |
| ClassHCounter | smallint | 2 | NO |  |
| ClearCode | nvarchar | 40 | NO |  |
| CostOverride | bit | 1 | NO |  |
| CountryGrouping | nvarchar | 4 | YES |  |
| DateIssued | datetime | 8 | YES |  |
| DefaultFloor | smallint | 2 | NO |  |
| Edition | tinyint | 1 | NO |  |
| EsGrpgWorkSched | nvarchar | 2 | YES |  |
| EscortCapable | bit | 1 | NO |  |
| EscortRequired | bit | 1 | NO |  |
| EventLockoutOverride | bit | 1 | NO |  |
| ExemptReuseTime | bit | 1 | NO |  |
| ExemptLongTermStaleness | bit | 1 | NO |  |
| ExemptShortTermStaleness | bit | 1 | NO |  |
| ExpiryDateTime | datetime | 8 | NO |  |
| ExpiryIsActivation | bit | 1 | NO |  |
| ExtWageTypeGrpg | nvarchar | 6 | NO |  |
| FacilityCode | smallint | 2 | NO |  |
| FrontCardLayout | nvarchar | 510 | NO |  |
| FS90CardCategoryID | smallint | 2 | NO |  |
| KeypadEntryOnly | bit | 1 | NO |  |
| LackOfUseExpiryExempt | bit | 1 | NO |  |
| LACOptions | bigint | 8 | NO |  |
| LanguIso | nvarchar | 4 | NO |  |
| LastEncoded | datetime | 8 | YES |  |
| LastModifBy | nvarchar | 100 | NO |  |
| LastModifDateTime | datetime | 8 | NO |  |
| LastModifOnServer | smallint | 2 | NO |  |
| LastPrinted | datetime | 8 | YES |  |
| LayoutID | tinyint | 1 | NO |  |
| LinkedCardID | int | 4 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| LongAccess | bit | 1 | NO |  |
| MailIndicator | nvarchar | 2 | NO |  |
| Maintenance | bit | 1 | NO |  |
| MsgID | smallint | 2 | NO |  |
| NextPINCode | int | 4 | NO |  |
| NumTimesPrinted | smallint | 2 | NO |  |
| OnCtuDisable | bit | 1 | NO |  |
| ParkingEntryExit | bit | 1 | NO |  |
| PassbackExempt | bit | 1 | NO |  |
| PINCode | int | 4 | NO |  |
| Privileged | bit | 1 | NO |  |
| PsGrpgAttAbsType | nvarchar | 4 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| SaltoAuditOpenings | bit | 1 | NO |  |
| SaltoEncoded | bit | 1 | NO |  |
| SaltoLockdownEnabled | bit | 1 | NO |  |
| SaltoOfficeModeEnabled | bit | 1 | NO |  |
| SaltoOverrideLockdown | bit | 1 | NO |  |
| SaltoPinEnabled | bit | 1 | NO |  |
| SaltoUseAntipassback | bit | 1 | NO |  |
| SaltoUpdatePeriod | int | 4 | NO |  |
| SaltoUseExtendedOpening | bit | 1 | NO |  |
| SaltoWiegandCode | nvarchar | 80 | NO |  |
| SaltoGPF1 | nvarchar | 80 | NO |  |
| SaltoGPF2 | nvarchar | 80 | NO |  |
| SaltoGPF3 | nvarchar | 80 | NO |  |
| SaltoGPF4 | nvarchar | 80 | NO |  |
| SaltoGPF5 | nvarchar | 80 | NO |  |
| SbiID | int | 4 | NO |  |
| SbiType | smallint | 2 | NO |  |
| SecondaryExpiryDate | datetime | 8 | NO |  |
| SEIssueCode | smallint | 2 | NO |  |
| SEAllowExtendByKeypad | bit | 1 | YES |  |
| ServerCreatedOn | smallint | 2 | NO |  |
| SgrGroupID | smallint | 2 | NO |  |
| ShortDescription | nvarchar | 32 | NO |  |
| SoonToExpire | bit | 1 | NO |  |
| SourceSys | nvarchar | 20 | NO |  |
| Supervisor | bit | 1 | NO |  |
| SupervisorRequired | bit | 1 | NO |  |
| StateID | smallint | 2 | NO |  |
| TimeEventTypeGroup | nvarchar | 4 | NO |  |
| TypeMsg | tinyint | 1 | NO |  |
| UsesBeforeExpiry | int | 4 | NO |  |
| UserDefinedA | bit | 1 | NO |  |
| UserDefinedB | bit | 1 | NO |  |
| UserDefinedC | bit | 1 | NO |  |
| UserDefinedD | bit | 1 | NO |  |
| UserDefinedE | bit | 1 | NO |  |
| UserDefinedF | bit | 1 | NO |  |
| UserDefinedG | bit | 1 | NO |  |

## CardCommenceExpire

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CardID | int | 4 | NO |  |
| SbiID | int | 4 | NO |  |
| SiteID | int | 4 | NO |  |
| AccessRightID | int | 4 | NO |  |
| CommencedExpired | tinyint | 1 | NO |  |

## CardDownloadInfo

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CardID | int | 4 | NO |  |
| ConfigurationRequired | smallint | 2 | NO |  |
| RSIConfigurationRequired | smallint | 2 | NO |  |
| DownloadRequired | bit | 1 | NO |  |

## CardSaving

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| AcsBarCode | nvarchar | 40 | NO |  |
| AcsMagStripe | nvarchar | 40 | NO |  |
| AffiliationCode | smallint | 2 | NO |  |
| AllowAccessOnLossOfComs | bit | 1 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| AttAbsReasonGrpg | nvarchar | 6 | NO |  |
| BackCardLayout | nvarchar | 510 | NO |  |
| BuildingEntryExit | bit | 1 | NO |  |
| CardID | int | 4 | NO |  |
| CardNumber | nvarchar | 40 | NO |  |
| CardType | tinyint | 1 | YES |  |
| CardClassA | bit | 1 | NO |  |
| CardClassB | bit | 1 | NO |  |
| CommencementDateTime | datetime | 8 | NO |  |
| ExpiryDateTime | datetime | 8 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| StateID | smallint | 2 | NO |  |
| Category | tinyint | 1 | YES |  |
| ClassHCounter | smallint | 2 | NO |  |
| ClearCode | nvarchar | 40 | NO |  |
| CostOverride | bit | 1 | NO |  |
| CountryGrouping | nvarchar | 4 | YES |  |
| DateIssued | datetime | 8 | YES |  |
| Edition | tinyint | 1 | NO |  |
| EsGrpgWorkSched | nvarchar | 2 | YES |  |
| EscortCapable | bit | 1 | NO |  |
| EscortRequired | bit | 1 | NO |  |
| EventLockoutOverride | bit | 1 | NO |  |
| ExtWageTypeGrpg | nvarchar | 6 | NO |  |
| FacilityCode | smallint | 2 | NO |  |
| FrontCardLayout | nvarchar | 510 | NO |  |
| FS90CardCategoryID | smallint | 2 | NO |  |
| LanguIso | nvarchar | 4 | YES |  |
| LastModifBy | nvarchar | 100 | NO |  |
| LastModifDateTime | datetime | 8 | YES |  |
| LastModifOnServer | smallint | 2 | NO |  |
| LastPrinted | datetime | 8 | YES |  |
| LayoutID | tinyint | 1 | YES |  |
| LinkedCardID | int | 4 | YES |  |
| LongAccess | bit | 1 | NO |  |
| MailIndicator | nvarchar | 2 | YES |  |
| MsgID | smallint | 2 | YES |  |
| NextPINCode | int | 4 | NO |  |
| NumTimesPrinted | smallint | 2 | NO |  |
| OnCtuDisable | bit | 1 | NO |  |
| ParkingEntryExit | bit | 1 | NO |  |
| PINCode | int | 4 | NO |  |
| Privileged | bit | 1 | NO |  |
| PsGrpgAttAbsType | nvarchar | 4 | YES |  |
| SbiID | int | 4 | YES |  |
| SbiType | smallint | 2 | YES |  |
| SecondaryExpiryDate | datetime | 8 | NO |  |
| SEIssueCode | smallint | 2 | NO |  |
| SgrGroupID | smallint | 2 | YES |  |
| ShortDescription | nvarchar | 32 | NO |  |
| ServerCreatedOn | smallint | 2 | NO |  |
| SoonToExpire | smallint | 2 | NO |  |
| SourceSys | nvarchar | 20 | YES |  |
| TimeEventTypeGroup | nvarchar | 4 | YES |  |
| TypeMsg | tinyint | 1 | YES |  |

## ComboFields

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TableName | nvarchar | 256 | NO |  |
| FieldName | nvarchar | 256 | NO |  |
| ComboIndex | smallint | 2 | NO |  |
| StringID | int | 4 | NO |  |
| ExternalKey | nvarchar | 510 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## Company

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LocationID | int | 4 | NO |  |
| ADDRESS | nvarchar | 200 | NO |  |
| CITY | nvarchar | 200 | NO |  |
| COUNTRY | nvarchar | 200 | NO |  |
| CAP | nvarchar | 60 | NO |  |
| TELEPHONE | nvarchar | 60 | NO |  |
| FAX | nvarchar | 60 | NO |  |
| CONTACT | nvarchar | 200 | NO |  |
| Parameter1 | nvarchar | 200 | NO |  |
| Parameter2 | nvarchar | 200 | NO |  |
| Parameter3 | nvarchar | 200 | NO |  |
| Parameter4 | nvarchar | 200 | NO |  |
| Parameter5 | nvarchar | 200 | NO |  |
| TaxCode | nvarchar | 200 | NO |  |
| CorporateName | nvarchar | 200 | NO |  |
| EMail | nvarchar | 510 | NO |  |
| Flag1 | bit | 1 | NO |  |
| Flag2 | bit | 1 | NO |  |
| Flag3 | bit | 1 | NO |  |
| Flag4 | bit | 1 | NO |  |
| Flag5 | bit | 1 | NO |  |
| DownloadRequired | bit | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## Constraints

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| AddStatement | nvarchar | -1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ControlProperties

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ControlID | int | 4 | NO |  |
| AssemblyName | nvarchar | 2000 | NO |  |
| ClassName | nvarchar | 2000 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## DI_GRANTED_DATE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| GRANTED_DATE | datetime | 8 | YES |  |

## DI_INPUT_TRANSIT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_ROW | int | 4 | NO |  |
| CARD_NUMBER | nvarchar | 40 | NO |  |
| LAYOUT_ID | int | 4 | NO |  |
| TRANSIT_DATE | datetime | 8 | NO |  |
| TERMINAL | nvarchar | 16 | NO |  |
| SKIP_TERMINAL | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| ARRIVAL_ZONE | nvarchar | 16 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| ACCESS_CONTROL_TYPE | tinyint | 1 | YES |  |
| TIME_ATTENDANCE_TYPE | tinyint | 1 | YES |  |
| CANTEEN_TYPE | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| GRANTED | tinyint | 1 | YES |  |
| SUPERVISED | tinyint | 1 | YES |  |
| TRANSIT_STATUS | tinyint | 1 | YES |  |
| REASON | nvarchar | 10 | YES |  |
| PARAMETER_X | nvarchar | 40 | YES |  |
| FLAG_X | tinyint | 1 | YES |  |
| DISABLED | tinyint | 1 | YES |  |

## DI_INPUT_TRANSIT_BAD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_ROW | int | 4 | NO |  |
| CARD_NUMBER | nvarchar | 40 | YES |  |
| LAYOUT_ID | int | 4 | YES |  |
| TRANSIT_DATE | datetime | 8 | YES |  |
| TERMINAL | nvarchar | 16 | YES |  |
| SKIP_TERMINAL | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| ARRIVAL_ZONE | nvarchar | 16 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| ACCESS_CONTROL_TYPE | tinyint | 1 | YES |  |
| TIME_ATTENDANCE_TYPE | tinyint | 1 | YES |  |
| CANTEEN_TYPE | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| GRANTED | tinyint | 1 | YES |  |
| SUPERVISED | tinyint | 1 | YES |  |
| TRANSIT_STATUS | tinyint | 1 | YES |  |
| REASON | nvarchar | 10 | YES |  |
| PARAMETER_X | nvarchar | 40 | YES |  |
| FLAG_X | tinyint | 1 | YES |  |
| DISABLED | tinyint | 1 | YES |  |

## DI_TRANSIT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CARD_NUMBER | nvarchar | 40 | NO |  |
| LAYOUT_ID | int | 4 | NO |  |
| TRANSIT_TIME | datetime | 8 | NO |  |
| TRANSIT_STATUS | tinyint | 1 | YES |  |
| STR_TRANSIT_STATUS | nvarchar | 40 | YES |  |
| SBI_TYPE | tinyint | 1 | YES |  |
| SBI_ID | int | 4 | YES |  |
| SURNAME | nvarchar | 70 | YES |  |
| NAME | nvarchar | 50 | YES |  |
| IDENTIFIER | nvarchar | 40 | YES |  |
| ZONE | nvarchar | 16 | YES |  |
| TERMINAL | nvarchar | 16 | NO |  |
| REASON | nvarchar | 10 | YES |  |
| ACCESS_CONTROL_TYPE | tinyint | 1 | YES |  |
| TIME_ATTENDANCE_TYPE | tinyint | 1 | YES |  |
| CANTEEN_TYPE | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| STR_TRANSIT_TYPE | nvarchar | 32 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| STR_DIRECTION | nvarchar | 32 | YES |  |
| USER_TYPE | nvarchar | 48 | YES |  |
| VISITOR_COMPANY | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 200 | YES |  |
| PARAMETER_2 | nvarchar | 200 | YES |  |
| PARAMETER_3 | nvarchar | 200 | YES |  |
| PARAMETER_4 | nvarchar | 200 | YES |  |
| PARAMETER_5 | nvarchar | 200 | YES |  |
| KEY_CL01 | nvarchar | 100 | YES |  |
| CL01 | nvarchar | 100 | YES |  |
| KEY_CL02 | nvarchar | 100 | YES |  |
| CL02 | nvarchar | 100 | YES |  |
| KEY_CL03 | nvarchar | 100 | YES |  |
| CL03 | nvarchar | 100 | YES |  |
| KEY_CL04 | nvarchar | 100 | YES |  |
| CL04 | nvarchar | 100 | YES |  |
| KEY_CL05 | nvarchar | 100 | YES |  |
| CL05 | nvarchar | 100 | YES |  |
| KEY_CL06 | nvarchar | 100 | YES |  |
| CL06 | nvarchar | 100 | YES |  |
| KEY_CL07 | nvarchar | 100 | YES |  |
| CL07 | nvarchar | 100 | YES |  |
| KEY_CL08 | nvarchar | 100 | YES |  |
| CL08 | nvarchar | 100 | YES |  |
| KEY_CL09 | nvarchar | 100 | YES |  |
| CL09 | nvarchar | 100 | YES |  |
| KEY_CL10 | nvarchar | 100 | YES |  |
| CL10 | nvarchar | 100 | YES |  |
| ASSOCIATED_SBI_TYPE | tinyint | 1 | YES |  |
| ASSOCIATED_SBI_ID | int | 4 | YES |  |
| ASSOCIATED_SURNAME | nvarchar | 64 | YES |  |
| ASSOCIATED_NAME | nvarchar | 50 | YES |  |
| ASSOCIATED_IDENTIFIER | nvarchar | 40 | YES |  |
| GRANTED | tinyint | 1 | YES |  |
| SUPERVISED | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| TCATEGORY_LABEL | nvarchar | 6 | YES |  |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |
| ADL01 | nvarchar | 80 | YES |  |
| ADL02 | nvarchar | 80 | YES |  |
| ADL03 | nvarchar | 80 | YES |  |
| ADL04 | nvarchar | 80 | YES |  |
| ADL05 | nvarchar | 80 | YES |  |
| ADL06 | nvarchar | 80 | YES |  |
| ADL07 | nvarchar | 80 | YES |  |
| ADL08 | nvarchar | 80 | YES |  |
| ADL09 | nvarchar | 80 | YES |  |
| ADL10 | nvarchar | 80 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| LocationFullName | nvarchar | 400 | YES |  |

## DI_TRANSIT_TIME

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CARD_NUMBER | nvarchar | 40 | NO |  |
| LAYOUT_ID | int | 4 | NO |  |
| TRANSIT_TIME | datetime | 8 | NO |  |
| TRANSIT_STATUS | tinyint | 1 | YES |  |
| STR_TRANSIT_STATUS | nvarchar | 40 | YES |  |
| SBI_TYPE | tinyint | 1 | YES |  |
| SBI_ID | int | 4 | YES |  |
| SURNAME | nvarchar | 70 | YES |  |
| NAME | nvarchar | 50 | YES |  |
| IDENTIFIER | nvarchar | 40 | YES |  |
| ZONE | nvarchar | 16 | YES |  |
| TERMINAL | nvarchar | 16 | NO |  |
| REASON | nvarchar | 10 | YES |  |
| ACCESS_CONTROL_TYPE | tinyint | 1 | YES |  |
| TIME_ATTENDANCE_TYPE | tinyint | 1 | YES |  |
| CANTEEN_TYPE | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| STR_TRANSIT_TYPE | nvarchar | 32 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| STR_DIRECTION | nvarchar | 32 | YES |  |
| USER_TYPE | nvarchar | 48 | YES |  |
| VISITOR_COMPANY | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 200 | YES |  |
| PARAMETER_2 | nvarchar | 200 | YES |  |
| PARAMETER_3 | nvarchar | 200 | YES |  |
| PARAMETER_4 | nvarchar | 200 | YES |  |
| PARAMETER_5 | nvarchar | 200 | YES |  |
| KEY_CL01 | nvarchar | 100 | YES |  |
| CL01 | nvarchar | 100 | YES |  |
| KEY_CL02 | nvarchar | 100 | YES |  |
| CL02 | nvarchar | 100 | YES |  |
| KEY_CL03 | nvarchar | 100 | YES |  |
| CL03 | nvarchar | 100 | YES |  |
| KEY_CL04 | nvarchar | 100 | YES |  |
| CL04 | nvarchar | 100 | YES |  |
| KEY_CL05 | nvarchar | 100 | YES |  |
| CL05 | nvarchar | 100 | YES |  |
| KEY_CL06 | nvarchar | 100 | YES |  |
| CL06 | nvarchar | 100 | YES |  |
| KEY_CL07 | nvarchar | 100 | YES |  |
| CL07 | nvarchar | 100 | YES |  |
| KEY_CL08 | nvarchar | 100 | YES |  |
| CL08 | nvarchar | 100 | YES |  |
| KEY_CL09 | nvarchar | 100 | YES |  |
| CL09 | nvarchar | 100 | YES |  |
| KEY_CL10 | nvarchar | 100 | YES |  |
| CL10 | nvarchar | 100 | YES |  |
| ASSOCIATED_SBI_TYPE | tinyint | 1 | YES |  |
| ASSOCIATED_SBI_ID | int | 4 | YES |  |
| ASSOCIATED_SURNAME | nvarchar | 64 | YES |  |
| ASSOCIATED_NAME | nvarchar | 50 | YES |  |
| ASSOCIATED_IDENTIFIER | nvarchar | 40 | YES |  |
| GRANTED | tinyint | 1 | YES |  |
| SUPERVISED | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| TCATEGORY_LABEL | nvarchar | 6 | YES |  |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |
| ADL01 | nvarchar | 80 | YES |  |
| ADL02 | nvarchar | 80 | YES |  |
| ADL03 | nvarchar | 80 | YES |  |
| ADL04 | nvarchar | 80 | YES |  |
| ADL05 | nvarchar | 80 | YES |  |
| ADL06 | nvarchar | 80 | YES |  |
| ADL07 | nvarchar | 80 | YES |  |
| ADL08 | nvarchar | 80 | YES |  |
| ADL09 | nvarchar | 80 | YES |  |
| ADL10 | nvarchar | 80 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| LocationFullName | nvarchar | 400 | YES |  |

## Descriptors

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| Descriptor | nvarchar | 800 | NO |  |
| StringID | int | 4 | NO |  |

## DownloadTimeouts

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ServerID | smallint | 2 | NO |  |
| DwnldTimeout | int | 4 | NO |  |
| TCPTimeout | int | 4 | NO |  |
| ResponseTimeout | int | 4 | NO |  |

## Employee

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| Name | nvarchar | 100 | NO |  |
| Surname | nvarchar | 100 | NO |  |
| AdsiAccount | nvarchar | 100 | NO |  |
| AlarmInstructPage | nvarchar | 60 | NO |  |
| AlarmPriority | smallint | 2 | NO |  |
| AlarmSubPriority | smallint | 2 | NO |  |
| AlternateIdentifier | nvarchar | 100 | NO |  |
| AssociatedPage | nvarchar | 60 | NO |  |
| BirthDate | datetime | 8 | NO |  |
| Building | nvarchar | 70 | NO |  |
| CardTrace | bit | 1 | NO |  |
| Category | tinyint | 1 | YES |  |
| CHImage | nvarchar | 200 | NO |  |
| ChromakeyLevel | smallint | 2 | NO |  |
| CHSignature | nvarchar | 200 | NO |  |
| Class1 | smallint | 2 | NO |  |
| Class2 | smallint | 2 | NO |  |
| Class3 | smallint | 2 | NO |  |
| Class4 | smallint | 2 | NO |  |
| Class5 | smallint | 2 | NO |  |
| Class6 | smallint | 2 | NO |  |
| Class7 | smallint | 2 | NO |  |
| Class8 | smallint | 2 | NO |  |
| Class9 | smallint | 2 | NO |  |
| Class10 | smallint | 2 | NO |  |
| CommencementDateTime | datetime | 8 | NO |  |
| Comments | nvarchar | 510 | NO |  |
| DefBackCardLayout | nvarchar | 510 | NO |  |
| DefFrontCardLayout | nvarchar | 510 | NO |  |
| EMail | nvarchar | 510 | NO |  |
| Escort | int | 4 | NO |  |
| ExpiryDateTime | datetime | 8 | NO |  |
| ExternalKey | nvarchar | 510 | NO |  |
| ExternalSource | tinyint | 1 | YES |  |
| FASC_N | nvarchar | 100 | NO |  |
| Floor | nvarchar | 70 | NO |  |
| Identifier | nvarchar | 100 | NO |  |
| LastModifBy | nvarchar | 100 | NO |  |
| LastModifDateTime | datetime | 8 | NO |  |
| LastModifOnServer | smallint | 2 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| Office | nvarchar | 70 | NO |  |
| Parameter1 | nvarchar | 200 | NO |  |
| Parameter2 | nvarchar | 200 | NO |  |
| Parameter3 | nvarchar | 200 | NO |  |
| Parameter4 | nvarchar | 200 | NO |  |
| Parameter5 | nvarchar | 200 | NO |  |
| PreferredName | nvarchar | 100 | NO |  |
| RecOwner | nvarchar | 510 | NO |  |
| ResidenceAddress | nvarchar | 510 | NO |  |
| Room | nvarchar | 70 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| ServerCreatedOn | smallint | 2 | NO |  |
| SoonToExpire | bit | 1 | NO |  |
| SoonToExpireCards | bit | 1 | NO |  |
| StateID | smallint | 2 | NO |  |
| Telephone | nvarchar | 100 | NO |  |
| Telephone2 | nvarchar | 100 | NO |  |
| TWICExpiry | datetime | 8 | NO |  |
| TWICStateID | smallint | 2 | NO |  |
| VehicleID | int | 4 | NO |  |
| Visitable | bit | 1 | NO |  |
| WebOperator | nvarchar | 100 | NO |  |
| WebWorkstation | nvarchar | 16 | NO |  |

## EmployeeUserFields

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| UF1 | datetime | 8 | NO |  |
| UF2 | nvarchar | 200 | NO |  |
| UF3 | nvarchar | 200 | NO |  |
| UF4 | nvarchar | 200 | NO |  |
| UF5 | nvarchar | 200 | NO |  |
| UF6 | nvarchar | 200 | NO |  |
| UF7 | smallint | 2 | NO |  |
| UF8 | smallint | 2 | NO |  |
| UF9 | smallint | 2 | NO |  |
| UF10 | smallint | 2 | NO |  |
| UF11 | smallint | 2 | NO |  |
| UF12 | nvarchar | 200 | NO |  |
| UF13 | nvarchar | 200 | NO |  |
| UF14 | nvarchar | 200 | NO |  |
| UF15 | nvarchar | 200 | NO |  |
| UF16 | nvarchar | 200 | NO |  |
| UF17 | nvarchar | 200 | NO |  |
| UF18 | nvarchar | 200 | NO |  |
| UF19 | smallint | 2 | NO |  |
| UF20 | smallint | 2 | NO |  |
| UF21 | smallint | 2 | NO |  |
| UF22 | smallint | 2 | NO |  |
| UF23 | smallint | 2 | NO |  |
| UF24 | datetime | 8 | NO |  |
| UF25 | nvarchar | 200 | NO |  |
| UF26 | nvarchar | 200 | NO |  |
| UF27 | nvarchar | 200 | NO |  |
| UF28 | smallint | 2 | NO |  |
| UF29 | nvarchar | 200 | NO |  |
| UF30 | nvarchar | 200 | NO |  |
| UF31 | nvarchar | 200 | NO |  |
| UF32 | nvarchar | 200 | NO |  |
| UF33 | nvarchar | 200 | NO |  |
| UF34 | nvarchar | 200 | NO |  |
| UF35 | nvarchar | 200 | NO |  |
| UF36 | nvarchar | 200 | NO |  |
| UF37 | nvarchar | 200 | NO |  |
| UF38 | nvarchar | 200 | NO |  |
| UF39 | nvarchar | 200 | NO |  |
| UF40 | datetime | 8 | NO |  |
| UF41 | datetime | 8 | NO |  |
| UF42 | bit | 1 | NO |  |
| UF43 | bit | 1 | NO |  |
| UF44 | bit | 1 | NO |  |
| UF45 | bit | 1 | NO |  |
| UF46 | bit | 1 | NO |  |
| UF47 | nvarchar | 200 | NO |  |
| UF48 | nvarchar | 200 | NO |  |
| UF49 | nvarchar | 200 | NO |  |
| UF50 | nvarchar | 200 | NO |  |
| UF51 | nvarchar | 200 | NO |  |
| UF52 | nvarchar | 200 | NO |  |
| UF53 | nvarchar | 200 | NO |  |
| UF54 | nvarchar | 200 | NO |  |
| UF55 | nvarchar | 200 | NO |  |
| UF56 | nvarchar | 200 | NO |  |
| UF57 | nvarchar | 200 | NO |  |
| UF58 | nvarchar | 200 | NO |  |
| UF59 | nvarchar | 200 | NO |  |
| UF60 | nvarchar | 200 | NO |  |
| UF61 | nvarchar | 200 | NO |  |
| UF62 | nvarchar | 200 | NO |  |
| UF63 | nvarchar | 200 | NO |  |
| UF64 | nvarchar | 200 | NO |  |
| UF65 | nvarchar | 200 | NO |  |
| UF66 | nvarchar | 200 | NO |  |
| UF67 | nvarchar | 200 | NO |  |
| UF68 | nvarchar | 200 | NO |  |
| UF69 | nvarchar | 200 | NO |  |
| UF70 | nvarchar | 200 | NO |  |
| UF71 | nvarchar | 200 | NO |  |
| UF72 | nvarchar | 200 | NO |  |
| UF73 | nvarchar | 200 | NO |  |
| UF74 | nvarchar | 200 | NO |  |
| UF75 | nvarchar | 200 | NO |  |
| UF76 | nvarchar | 200 | NO |  |
| UF77 | nvarchar | 200 | NO |  |
| UF78 | nvarchar | 200 | NO |  |
| UF79 | nvarchar | 200 | NO |  |
| UF80 | nvarchar | 200 | NO |  |
| UF81 | nvarchar | 200 | NO |  |
| UF82 | nvarchar | 200 | NO |  |
| UF83 | nvarchar | 200 | NO |  |
| UF84 | nvarchar | 200 | NO |  |
| UF85 | nvarchar | 200 | NO |  |
| UF86 | nvarchar | 200 | NO |  |
| UF87 | nvarchar | 200 | NO |  |
| UF88 | nvarchar | 200 | NO |  |
| UF89 | nvarchar | 200 | NO |  |
| UF90 | nvarchar | 200 | NO |  |
| UF91 | nvarchar | 200 | NO |  |
| UF92 | nvarchar | 200 | NO |  |
| UF93 | nvarchar | 200 | NO |  |
| UF94 | nvarchar | 200 | NO |  |

## Enrollments

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| EnrollmentID | smallint | 2 | NO |  |
| CRT | smallint | 2 | NO |  |
| Type | smallint | 2 | NO |  |
| Reader | bigint | 8 | NO |  |
| SbiID | int | 4 | NO |  |
| CardNumber | nvarchar | 40 | NO |  |
| LayoutID | smallint | 2 | NO |  |
| Status | tinyint | 1 | NO |  |
| Result | nvarchar | 400 | YES |  |
| Issued | datetime | 8 | NO |  |

## Entities

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| EntityName | nvarchar | 800 | NO |  |
| IsSbi | bit | 1 | NO |  |
| Tables | xml | -1 | NO |  |
| Group | nvarchar | 800 | NO |  |
| Name | int | 4 | NO |  |
| NamePlural | int | 4 | NO |  |
| AddedMessage | int | 4 | NO |  |
| FoundMessage | int | 4 | NO |  |
| SummaryResultFormat | nvarchar | 800 | NO |  |
| SummaryResultToolTipFormat | nvarchar | 800 | NO |  |
| ServiceIconName | nvarchar | 100 | NO |  |

## ExternalCompany

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ExternalCompanyID | int | 4 | NO |  |
| Name | nvarchar | 70 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| ExternalKey | nvarchar | 510 | NO |  |
| Description | nvarchar | 70 | NO |  |
| Address | nvarchar | 70 | NO |  |
| City | nvarchar | 40 | NO |  |
| Country | nvarchar | 200 | NO |  |
| Cap | nvarchar | 40 | NO |  |
| Telephone | nvarchar | 40 | NO |  |
| Fax | nvarchar | 40 | NO |  |
| Contact | nvarchar | 70 | NO |  |
| Parameter1 | nvarchar | 40 | NO |  |
| Parameter2 | nvarchar | 40 | NO |  |
| Parameter3 | nvarchar | 40 | NO |  |
| Parameter4 | nvarchar | 40 | NO |  |
| Parameter5 | nvarchar | 40 | NO |  |
| TaxCode | nvarchar | 40 | NO |  |
| CorporateName | nvarchar | 60 | NO |  |
| EMail | nvarchar | 510 | NO |  |
| Flag1 | bit | 1 | NO |  |
| Flag2 | bit | 1 | NO |  |
| Flag3 | bit | 1 | NO |  |
| Flag4 | bit | 1 | NO |  |
| Flag5 | bit | 1 | NO |  |
| FlagCustom | bit | 1 | NO |  |
| LastModifBy | nvarchar | 100 | NO |  |
| LastModifDateTime | datetime | 8 | NO |  |
| LastModifOnServer | smallint | 2 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ExternalCompany_Prog

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RecordID | int | 4 | NO |  |
| LastExternalCompanyID | int | 4 | YES |  |
| LastNegativeExternalCompanyID | int | 4 | YES |  |

## ExternalRegular

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| Name | nvarchar | 100 | NO |  |
| Surname | nvarchar | 100 | NO |  |
| AdsiAccount | nvarchar | 100 | NO |  |
| AlarmInstructPage | nvarchar | 60 | NO |  |
| AlarmPriority | smallint | 2 | NO |  |
| AlarmSubPriority | smallint | 2 | NO |  |
| AlternateIdentifier | nvarchar | 100 | NO |  |
| AssociatedPage | nvarchar | 60 | NO |  |
| BirthDate | datetime | 8 | NO |  |
| Building | nvarchar | 70 | NO |  |
| CardTrace | bit | 1 | NO |  |
| Category | tinyint | 1 | NO |  |
| CHImage | nvarchar | 200 | NO |  |
| ChromakeyLevel | smallint | 2 | NO |  |
| CHSignature | nvarchar | 200 | NO |  |
| Class1 | smallint | 2 | NO |  |
| Class2 | smallint | 2 | NO |  |
| Class3 | smallint | 2 | NO |  |
| Class4 | smallint | 2 | NO |  |
| Class5 | smallint | 2 | NO |  |
| Class6 | smallint | 2 | NO |  |
| Class7 | smallint | 2 | NO |  |
| Class8 | smallint | 2 | NO |  |
| Class9 | smallint | 2 | NO |  |
| Class10 | smallint | 2 | NO |  |
| CommencementDateTime | datetime | 8 | NO |  |
| Comments | nvarchar | 510 | NO |  |
| DefBackCardLayout | nvarchar | 510 | NO |  |
| DefFrontCardLayout | nvarchar | 510 | NO |  |
| EMail | nvarchar | 510 | NO |  |
| Escort | int | 4 | NO |  |
| ExpiryDateTime | datetime | 8 | NO |  |
| ExternalCompanyID | int | 4 | NO |  |
| ExternalKey | nvarchar | 510 | NO |  |
| ExternalSource | tinyint | 1 | NO |  |
| FASC_N | nvarchar | 100 | NO |  |
| Floor | nvarchar | 70 | NO |  |
| Identifier | nvarchar | 100 | NO |  |
| LastModifBy | nvarchar | 100 | NO |  |
| LastModifDateTime | datetime | 8 | NO |  |
| LastModifOnServer | smallint | 2 | NO |  |
| Office | nvarchar | 70 | NO |  |
| Parameter1 | nvarchar | 200 | NO |  |
| Parameter2 | nvarchar | 200 | NO |  |
| Parameter3 | nvarchar | 200 | NO |  |
| Parameter4 | nvarchar | 200 | NO |  |
| Parameter5 | nvarchar | 200 | NO |  |
| PreferredName | nvarchar | 100 | NO |  |
| RecOwner | nvarchar | 510 | NO |  |
| ResidenceAddress | nvarchar | 510 | NO |  |
| Room | nvarchar | 70 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| ServerCreatedOn | smallint | 2 | NO |  |
| SoonToExpire | bit | 1 | NO |  |
| SoonToExpireCards | bit | 1 | NO |  |
| StateID | smallint | 2 | NO |  |
| Telephone | nvarchar | 100 | NO |  |
| Telephone2 | nvarchar | 100 | NO |  |
| TWICExpiry | datetime | 8 | NO |  |
| TWICStateID | smallint | 2 | NO |  |
| VehicleID | int | 4 | NO |  |
| Visitable | bit | 1 | NO |  |
| WebOperator | nvarchar | 100 | NO |  |
| WebWorkstation | nvarchar | 16 | NO |  |

## ExternalRegularUserFields

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| UF1 | datetime | 8 | NO |  |
| UF2 | nvarchar | 200 | NO |  |
| UF3 | nvarchar | 200 | NO |  |
| UF4 | nvarchar | 200 | NO |  |
| UF5 | nvarchar | 200 | NO |  |
| UF6 | nvarchar | 200 | NO |  |
| UF7 | smallint | 2 | NO |  |
| UF8 | smallint | 2 | NO |  |
| UF9 | smallint | 2 | NO |  |
| UF10 | smallint | 2 | NO |  |
| UF11 | smallint | 2 | NO |  |
| UF12 | nvarchar | 200 | NO |  |
| UF13 | nvarchar | 200 | NO |  |
| UF14 | nvarchar | 200 | NO |  |
| UF15 | nvarchar | 200 | NO |  |
| UF16 | nvarchar | 200 | NO |  |
| UF17 | nvarchar | 200 | NO |  |
| UF18 | nvarchar | 200 | NO |  |
| UF19 | smallint | 2 | NO |  |
| UF20 | smallint | 2 | NO |  |
| UF21 | smallint | 2 | NO |  |
| UF22 | smallint | 2 | NO |  |
| UF23 | smallint | 2 | NO |  |
| UF24 | datetime | 8 | NO |  |
| UF25 | nvarchar | 200 | NO |  |
| UF26 | nvarchar | 200 | NO |  |
| UF27 | nvarchar | 200 | NO |  |
| UF28 | smallint | 2 | NO |  |
| UF29 | nvarchar | 200 | NO |  |
| UF30 | nvarchar | 200 | NO |  |
| UF31 | nvarchar | 200 | NO |  |
| UF32 | nvarchar | 200 | NO |  |
| UF33 | nvarchar | 200 | NO |  |
| UF34 | nvarchar | 200 | NO |  |
| UF35 | nvarchar | 200 | NO |  |
| UF36 | nvarchar | 200 | NO |  |
| UF37 | nvarchar | 200 | NO |  |
| UF38 | nvarchar | 200 | NO |  |
| UF39 | nvarchar | 200 | NO |  |
| UF40 | datetime | 8 | NO |  |
| UF41 | datetime | 8 | NO |  |
| UF42 | bit | 1 | NO |  |
| UF43 | bit | 1 | NO |  |
| UF44 | bit | 1 | NO |  |
| UF45 | bit | 1 | NO |  |
| UF46 | bit | 1 | NO |  |
| UF47 | nvarchar | 200 | NO |  |
| UF48 | nvarchar | 200 | NO |  |
| UF49 | nvarchar | 200 | NO |  |
| UF50 | nvarchar | 200 | NO |  |
| UF51 | nvarchar | 200 | NO |  |
| UF52 | nvarchar | 200 | NO |  |
| UF53 | nvarchar | 200 | NO |  |
| UF54 | nvarchar | 200 | NO |  |
| UF55 | nvarchar | 200 | NO |  |
| UF56 | nvarchar | 200 | NO |  |
| UF57 | nvarchar | 200 | NO |  |
| UF58 | nvarchar | 200 | NO |  |
| UF59 | nvarchar | 200 | NO |  |
| UF60 | nvarchar | 200 | NO |  |
| UF61 | nvarchar | 200 | NO |  |
| UF62 | nvarchar | 200 | NO |  |
| UF63 | nvarchar | 200 | NO |  |
| UF64 | nvarchar | 200 | NO |  |
| UF65 | nvarchar | 200 | NO |  |
| UF66 | nvarchar | 200 | NO |  |
| UF67 | nvarchar | 200 | NO |  |
| UF68 | nvarchar | 200 | NO |  |
| UF69 | nvarchar | 200 | NO |  |
| UF70 | nvarchar | 200 | NO |  |
| UF71 | nvarchar | 200 | NO |  |
| UF72 | nvarchar | 200 | NO |  |
| UF73 | nvarchar | 200 | NO |  |
| UF74 | nvarchar | 200 | NO |  |
| UF75 | nvarchar | 200 | NO |  |
| UF76 | nvarchar | 200 | NO |  |
| UF77 | nvarchar | 200 | NO |  |
| UF78 | nvarchar | 200 | NO |  |
| UF79 | nvarchar | 200 | NO |  |
| UF80 | nvarchar | 200 | NO |  |
| UF81 | nvarchar | 200 | NO |  |
| UF82 | nvarchar | 200 | NO |  |
| UF83 | nvarchar | 200 | NO |  |
| UF84 | nvarchar | 200 | NO |  |
| UF85 | nvarchar | 200 | NO |  |
| UF86 | nvarchar | 200 | NO |  |
| UF87 | nvarchar | 200 | NO |  |
| UF88 | nvarchar | 200 | NO |  |
| UF89 | nvarchar | 200 | NO |  |
| UF90 | nvarchar | 200 | NO |  |
| UF91 | nvarchar | 200 | NO |  |
| UF92 | nvarchar | 200 | NO |  |
| UF93 | nvarchar | 200 | NO |  |
| UF94 | nvarchar | 200 | NO |  |

## FieldLayoutProperties

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PageID | int | 4 | NO |  |
| TabID | int | 4 | NO |  |
| FieldLayoutID | int | 4 | NO |  |
| ControlID | int | 4 | NO |  |
| ColumnSpan | int | 4 | NO |  |
| RowSpan | int | 4 | NO |  |
| DataMode | int | 4 | NO |  |
| RequiredField | bit | 1 | NO |  |
| TableName | nvarchar | 256 | NO |  |
| FieldName | nvarchar | 256 | NO |  |
| StringID | int | 4 | NO |  |
| MaxCharacterCount | int | 4 | YES |  |
| CustomProperties | xml | -1 | NO |  |
| Options | xml | -1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## FieldProperties

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TableName | nvarchar | 256 | NO |  |
| FieldName | nvarchar | 256 | NO |  |
| SQLDataType | nvarchar | 256 | NO |  |
| DataType | nvarchar | 20 | NO |  |
| DefaultValue | nvarchar | 2000 | NO |  |
| RequiredField | bit | 1 | NO |  |
| XListQuery | nvarchar | 8000 | NO |  |
| IsUnique | bit | 1 | NO |  |
| Searchable | bit | 1 | NO |  |
| CoreSearchable | bit | 1 | NO |  |
| Visible | bit | 1 | NO |  |
| IsDataTip | bit | 1 | NO |  |
| IsSummaryColumn | bit | 1 | NO |  |
| StringID | int | 4 | NO |  |
| IndexBuilt | bit | 1 | NO |  |
| MaxCharacterCount | int | 4 | NO |  |
| MaxValue | real | 4 | NO |  |
| MinValue | real | 4 | NO |  |
| TriggersExpiry | bit | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## GlobalAccessLevels

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ServerRecordNumber | int | 4 | NO |  |
| ServerID | smallint | 2 | NO |  |
| AccessLevelName | nvarchar | 80 | NO |  |
| AccessLevelDescription | nvarchar | 264 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| DownloadRequired | bit | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## HA_ASSET

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ASSET_ID | nvarchar | 510 | NO |  |
| VISITOR_ID | int | 4 | NO |  |
| VISIT_START | datetime | 8 | NO |  |
| ASSET_DESCRIPTION | nvarchar | 200 | YES |  |
| ASSET_TYPE | nvarchar | 100 | YES |  |
| MODEL | nvarchar | 4 | YES |  |
| ASSET_STATUS | int | 4 | YES |  |
| JUSTIFICATION | nvarchar | 40 | YES |  |
| DOCUMENT_1 | nvarchar | 40 | YES |  |
| DOCUMENT_2 | nvarchar | 40 | YES |  |
| DOCUMENT_3 | nvarchar | 40 | YES |  |
| DOCUMENT_4 | nvarchar | 40 | YES |  |
| DOCUMENT_5 | nvarchar | 40 | YES |  |
| DATE_1 | datetime | 8 | YES |  |
| DATE_2 | datetime | 8 | YES |  |
| DATE_3 | datetime | 8 | YES |  |
| DATE_4 | datetime | 8 | YES |  |
| DATE_5 | datetime | 8 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| PARAMETER_3 | nvarchar | 40 | YES |  |
| PARAMETER_4 | nvarchar | 40 | YES |  |
| PARAMETER_5 | nvarchar | 40 | YES |  |
| FLAG_1 | tinyint | 1 | YES |  |
| FLAG_2 | tinyint | 1 | YES |  |
| FLAG_3 | tinyint | 1 | YES |  |
| FLAG_4 | tinyint | 1 | YES |  |
| FLAG_5 | tinyint | 1 | YES |  |
| NOTES | nvarchar | 200 | YES |  |
| KEY_CL01 | nvarchar | 100 | YES |  |
| CL01 | nvarchar | 100 | YES |  |
| KEY_CL02 | nvarchar | 100 | YES |  |
| CL02 | nvarchar | 100 | YES |  |
| KEY_CL03 | nvarchar | 100 | YES |  |
| CL03 | nvarchar | 100 | YES |  |
| KEY_CL04 | nvarchar | 100 | YES |  |
| CL04 | nvarchar | 100 | YES |  |
| KEY_CL05 | nvarchar | 100 | YES |  |
| CL05 | nvarchar | 100 | YES |  |
| INSERT_DATE | datetime | 8 | YES |  |

## HA_EVENT_PROGR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| LAST_EVENT_ID | int | 4 | YES |  |

## HA_RMASSIGNMENT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LAST_ASSIGNMENT | datetime | 8 | NO |  |
| CARD_ID | int | 4 | NO |  |
| SBI_ID | int | 4 | YES |  |
| SBI_TYPE | tinyint | 1 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## HA_TRANSIT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CARD_NUMBER | nvarchar | 40 | NO |  |
| LAYOUT_ID | int | 4 | NO |  |
| TRANSIT_DATE | datetime | 8 | NO |  |
| TRANSIT_STATUS | tinyint | 1 | YES |  |
| STR_TRANSIT_STATUS | nvarchar | 40 | YES |  |
| SBI_TYPE | tinyint | 1 | YES |  |
| SBI_ID | int | 4 | YES |  |
| SURNAME | nvarchar | 70 | YES |  |
| NAME | nvarchar | 50 | YES |  |
| IDENTIFIER | nvarchar | 40 | YES |  |
| ZONE | nvarchar | 16 | YES |  |
| TERMINAL | nvarchar | 16 | NO |  |
| REASON | nvarchar | 10 | YES |  |
| ACCESS_CONTROL_TYPE | tinyint | 1 | YES |  |
| TIME_ATTENDANCE_TYPE | tinyint | 1 | YES |  |
| CANTEEN_TYPE | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| STR_TRANSIT_TYPE | nvarchar | 32 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| STR_DIRECTION | nvarchar | 32 | YES |  |
| USER_TYPE | nvarchar | 48 | YES |  |
| VISITOR_COMPANY | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 200 | YES |  |
| PARAMETER_2 | nvarchar | 200 | YES |  |
| PARAMETER_3 | nvarchar | 200 | YES |  |
| PARAMETER_4 | nvarchar | 200 | YES |  |
| PARAMETER_5 | nvarchar | 200 | YES |  |
| KEY_CL01 | nvarchar | 100 | YES |  |
| CL01 | nvarchar | 100 | YES |  |
| KEY_CL02 | nvarchar | 100 | YES |  |
| CL02 | nvarchar | 100 | YES |  |
| KEY_CL03 | nvarchar | 100 | YES |  |
| CL03 | nvarchar | 100 | YES |  |
| KEY_CL04 | nvarchar | 100 | YES |  |
| CL04 | nvarchar | 100 | YES |  |
| KEY_CL05 | nvarchar | 100 | YES |  |
| CL05 | nvarchar | 100 | YES |  |
| KEY_CL06 | nvarchar | 100 | YES |  |
| CL06 | nvarchar | 100 | YES |  |
| KEY_CL07 | nvarchar | 100 | YES |  |
| CL07 | nvarchar | 100 | YES |  |
| KEY_CL08 | nvarchar | 100 | YES |  |
| CL08 | nvarchar | 100 | YES |  |
| KEY_CL09 | nvarchar | 100 | YES |  |
| CL09 | nvarchar | 100 | YES |  |
| KEY_CL10 | nvarchar | 100 | YES |  |
| CL10 | nvarchar | 100 | YES |  |
| ASSOCIATED_SBI_TYPE | tinyint | 1 | YES |  |
| ASSOCIATED_SBI_ID | int | 4 | YES |  |
| ASSOCIATED_SURNAME | nvarchar | 64 | YES |  |
| ASSOCIATED_NAME | nvarchar | 50 | YES |  |
| ASSOCIATED_IDENTIFIER | nvarchar | 40 | YES |  |
| GRANTED | tinyint | 1 | YES |  |
| SUPERVISED | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| TCATEGORY_LABEL | nvarchar | 6 | YES |  |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |
| ADL01 | nvarchar | 80 | YES |  |
| ADL02 | nvarchar | 80 | YES |  |
| ADL03 | nvarchar | 80 | YES |  |
| ADL04 | nvarchar | 80 | YES |  |
| ADL05 | nvarchar | 80 | YES |  |
| ADL06 | nvarchar | 80 | YES |  |
| ADL07 | nvarchar | 80 | YES |  |
| ADL08 | nvarchar | 80 | YES |  |
| ADL09 | nvarchar | 80 | YES |  |
| ADL10 | nvarchar | 80 | YES |  |
| INSERT_DATE | datetime | 8 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| LocationFullName | nvarchar | 400 | YES |  |

## HA_TRANSIT_STORED

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CARD_NUMBER | nvarchar | 40 | NO |  |
| LAYOUT_ID | int | 4 | NO |  |
| TRANSIT_DATE | datetime | 8 | NO |  |
| TRANSIT_STATUS | tinyint | 1 | YES |  |
| STR_TRANSIT_STATUS | nvarchar | 40 | YES |  |
| SBI_TYPE | tinyint | 1 | YES |  |
| SBI_ID | int | 4 | YES |  |
| SURNAME | nvarchar | 70 | YES |  |
| NAME | nvarchar | 50 | YES |  |
| IDENTIFIER | nvarchar | 40 | YES |  |
| ZONE | nvarchar | 16 | YES |  |
| TERMINAL | nvarchar | 16 | NO |  |
| REASON | nvarchar | 10 | YES |  |
| ACCESS_CONTROL_TYPE | tinyint | 1 | YES |  |
| TIME_ATTENDANCE_TYPE | tinyint | 1 | YES |  |
| CANTEEN_TYPE | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| STR_TRANSIT_TYPE | nvarchar | 32 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| STR_DIRECTION | nvarchar | 32 | YES |  |
| USER_TYPE | nvarchar | 48 | YES |  |
| VISITOR_COMPANY | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 200 | YES |  |
| PARAMETER_2 | nvarchar | 200 | YES |  |
| PARAMETER_3 | nvarchar | 200 | YES |  |
| PARAMETER_4 | nvarchar | 200 | YES |  |
| PARAMETER_5 | nvarchar | 200 | YES |  |
| KEY_CL01 | nvarchar | 100 | YES |  |
| CL01 | nvarchar | 100 | YES |  |
| KEY_CL02 | nvarchar | 100 | YES |  |
| CL02 | nvarchar | 100 | YES |  |
| KEY_CL03 | nvarchar | 100 | YES |  |
| CL03 | nvarchar | 100 | YES |  |
| KEY_CL04 | nvarchar | 100 | YES |  |
| CL04 | nvarchar | 100 | YES |  |
| KEY_CL05 | nvarchar | 100 | YES |  |
| CL05 | nvarchar | 100 | YES |  |
| KEY_CL06 | nvarchar | 100 | YES |  |
| CL06 | nvarchar | 100 | YES |  |
| KEY_CL07 | nvarchar | 100 | YES |  |
| CL07 | nvarchar | 100 | YES |  |
| KEY_CL08 | nvarchar | 100 | YES |  |
| CL08 | nvarchar | 100 | YES |  |
| KEY_CL09 | nvarchar | 100 | YES |  |
| CL09 | nvarchar | 100 | YES |  |
| KEY_CL10 | nvarchar | 100 | YES |  |
| CL10 | nvarchar | 100 | YES |  |
| ASSOCIATED_SBI_TYPE | tinyint | 1 | YES |  |
| ASSOCIATED_SBI_ID | int | 4 | YES |  |
| ASSOCIATED_SURNAME | nvarchar | 64 | YES |  |
| ASSOCIATED_NAME | nvarchar | 50 | YES |  |
| ASSOCIATED_IDENTIFIER | nvarchar | 40 | YES |  |
| GRANTED | tinyint | 1 | YES |  |
| SUPERVISED | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| TCATEGORY_LABEL | nvarchar | 6 | YES |  |
| SOURCE_SYS | nvarchar | 20 | YES |  |
| ADL_KEY | nvarchar | 16 | YES |  |
| ADL01 | nvarchar | 80 | YES |  |
| ADL02 | nvarchar | 80 | YES |  |
| ADL03 | nvarchar | 80 | YES |  |
| ADL04 | nvarchar | 80 | YES |  |
| ADL05 | nvarchar | 80 | YES |  |
| ADL06 | nvarchar | 80 | YES |  |
| ADL07 | nvarchar | 80 | YES |  |
| ADL08 | nvarchar | 80 | YES |  |
| ADL09 | nvarchar | 80 | YES |  |
| ADL10 | nvarchar | 80 | YES |  |
| INSERT_DATE | datetime | 8 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| LocationFullName | nvarchar | 400 | YES |  |

## HA_VISIT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SBI_ID | int | 4 | NO |  |
| SURNAME | nvarchar | 70 | YES |  |
| NAME | nvarchar | 50 | YES |  |
| SOCIETY | nvarchar | 40 | YES |  |
| NUMBER_PASS | int | 4 | YES |  |
| WS_KEY | nvarchar | 16 | YES |  |
| CLEAR_CODE | nvarchar | 32 | YES |  |
| REFERENCE_INDEXBOOK | int | 4 | YES |  |
| CONTACT_SURNAME | nvarchar | 70 | YES |  |
| CONTACT_NAME | nvarchar | 50 | YES |  |
| REFERENCE_AUTHORIZATION | tinyint | 1 | YES |  |
| VISIT_START | datetime | 8 | NO |  |
| VISIT_END | datetime | 8 | YES |  |
| VISIT_REASON | nvarchar | 70 | YES |  |
| VISIT_NOTE | nvarchar | 510 | YES |  |
| VISIT_DOCUMENT | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| PARAMETER_3 | nvarchar | 40 | YES |  |
| PARAMETER_4 | nvarchar | 40 | YES |  |
| PARAMETER_5 | nvarchar | 40 | YES |  |
| FLAG_1 | tinyint | 1 | YES |  |
| FLAG_2 | tinyint | 1 | YES |  |
| FLAG_3 | tinyint | 1 | YES |  |
| FLAG_4 | tinyint | 1 | YES |  |
| FLAG_5 | tinyint | 1 | YES |  |
| DATE_1 | datetime | 8 | YES |  |
| DATE_2 | datetime | 8 | YES |  |
| DATE_3 | datetime | 8 | YES |  |
| DATE_4 | datetime | 8 | YES |  |
| DATE_5 | datetime | 8 | YES |  |
| KEY_CL01 | nvarchar | 100 | YES |  |
| CL01 | nvarchar | 100 | YES |  |
| KEY_CL02 | nvarchar | 100 | YES |  |
| CL02 | nvarchar | 100 | YES |  |
| KEY_CL03 | nvarchar | 100 | YES |  |
| CL03 | nvarchar | 100 | YES |  |
| KEY_CL04 | nvarchar | 100 | YES |  |
| CL04 | nvarchar | 100 | YES |  |
| KEY_CL05 | nvarchar | 100 | YES |  |
| CL05 | nvarchar | 100 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| INSERT_DATE | datetime | 8 | YES |  |
| CHECKOUT_TYPE | tinyint | 1 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |

## HA_VISIT_STORED

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SBI_ID | int | 4 | NO |  |
| SURNAME | nvarchar | 70 | YES |  |
| NAME | nvarchar | 50 | YES |  |
| SOCIETY | nvarchar | 40 | YES |  |
| NUMBER_PASS | int | 4 | YES |  |
| WS_KEY | nvarchar | 16 | YES |  |
| CLEAR_CODE | nvarchar | 32 | YES |  |
| REFERENCE_INDEXBOOK | int | 4 | YES |  |
| CONTACT_SURNAME | nvarchar | 70 | YES |  |
| CONTACT_NAME | nvarchar | 50 | YES |  |
| REFERENCE_AUTHORIZATION | tinyint | 1 | YES |  |
| VISIT_START | datetime | 8 | NO |  |
| VISIT_END | datetime | 8 | YES |  |
| VISIT_REASON | nvarchar | 70 | YES |  |
| VISIT_NOTE | nvarchar | 510 | YES |  |
| VISIT_DOCUMENT | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| PARAMETER_3 | nvarchar | 40 | YES |  |
| PARAMETER_4 | nvarchar | 40 | YES |  |
| PARAMETER_5 | nvarchar | 40 | YES |  |
| FLAG_1 | tinyint | 1 | YES |  |
| FLAG_2 | tinyint | 1 | YES |  |
| FLAG_3 | tinyint | 1 | YES |  |
| FLAG_4 | tinyint | 1 | YES |  |
| FLAG_5 | tinyint | 1 | YES |  |
| DATE_1 | datetime | 8 | YES |  |
| DATE_2 | datetime | 8 | YES |  |
| DATE_3 | datetime | 8 | YES |  |
| DATE_4 | datetime | 8 | YES |  |
| DATE_5 | datetime | 8 | YES |  |
| KEY_CL01 | nvarchar | 100 | YES |  |
| CL01 | nvarchar | 100 | YES |  |
| KEY_CL02 | nvarchar | 100 | YES |  |
| CL02 | nvarchar | 100 | YES |  |
| KEY_CL03 | nvarchar | 100 | YES |  |
| CL03 | nvarchar | 100 | YES |  |
| KEY_CL04 | nvarchar | 100 | YES |  |
| CL04 | nvarchar | 100 | YES |  |
| KEY_CL05 | nvarchar | 100 | YES |  |
| CL05 | nvarchar | 100 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| INSERT_DATE | datetime | 8 | YES |  |
| CHECKOUT_TYPE | tinyint | 1 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |

## HolderEntities

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TableName | nvarchar | 100 | NO |  |
| SbiType | int | 4 | NO |  |
| HasUserFields | bit | 1 | NO |  |

## ID_CTU_OPERATOR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OPERATOR_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 44 | YES |  |
| PROFILE | nvarchar | 16 | YES |  |
| START_PWD | nvarchar | 16 | YES |  |
| PWD | nvarchar | 16 | YES |  |
| PWD_STATUS | tinyint | 1 | YES |  |
| START_VALIDITY | datetime | 8 | YES |  |
| END_VALIDITY | datetime | 8 | YES |  |
| CARDCODE | nvarchar | 40 | YES |  |
| EDITION | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_CTU_OPERATOR_PLANT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OPERATOR_KEY | nvarchar | 16 | NO |  |
| PLANT_KEY | nvarchar | 16 | NO |  |

## ID_CTU_PROFILE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PROFILE_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 44 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_CTU_PROFILE_RIGHT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PROFILE_KEY | nvarchar | 16 | NO |  |
| FUNCTION_ID | tinyint | 1 | NO |  |

## ID_DIGITAL_INPUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| INPUT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| RTU_KEY | nvarchar | 16 | YES |  |
| ADDRESS | tinyint | 1 | NO |  |
| POINT_TYPE | tinyint | 1 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| LOGIC1 | nvarchar | 16 | YES |  |
| LOGIC2 | nvarchar | 16 | YES |  |
| LOGIC3 | nvarchar | 16 | YES |  |
| LOGIC4 | nvarchar | 16 | YES |  |
| OUTPUT_TEST | nvarchar | 16 | YES |  |
| START_TEST_FBK | smallint | 2 | YES |  |
| END_TEST_FBK | smallint | 2 | YES |  |
| OUTPUT_RESET | nvarchar | 16 | YES |  |
| ALARM_REPETITION | tinyint | 1 | YES |  |
| AUTODISABLE_REP | tinyint | 1 | YES |  |
| AUTODISABLE_TIME | smallint | 2 | YES |  |
| AUTODISABLE_ALARM | tinyint | 1 | YES |  |
| ENABLE_TEST | tinyint | 1 | YES |  |
| ENABLE_RESET | tinyint | 1 | YES |  |
| CHECK_TIME | smallint | 2 | YES |  |
| ACTIVATION_TIME | smallint | 2 | YES |  |
| ALTERNATE_BEHAVIOR | tinyint | 1 | YES |  |
| PREALARM_FBK | smallint | 2 | YES |  |
| PREALARM_RET_FBK | smallint | 2 | YES |  |
| SHORT_FBK | smallint | 2 | YES |  |
| SHORT_RET_FBK | smallint | 2 | YES |  |
| ALARM_FBK | smallint | 2 | YES |  |
| ALARM_RET_FBK | smallint | 2 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RET_FBK | smallint | 2 | YES |  |
| CUT_FBK | smallint | 2 | YES |  |
| CUT_RET_FBK | smallint | 2 | YES |  |
| ACTIVE_FBK | smallint | 2 | YES |  |
| DEACTIVE_FBK | smallint | 2 | YES |  |
| OPERATIVE_NOTE | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_DIGITAL_INPUT_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| INPUT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| RTU_KEY | nvarchar | 16 | YES |  |
| ADDRESS | tinyint | 1 | NO |  |
| POINT_TYPE | tinyint | 1 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| LOGIC1 | nvarchar | 16 | YES |  |
| LOGIC2 | nvarchar | 16 | YES |  |
| LOGIC3 | nvarchar | 16 | YES |  |
| LOGIC4 | nvarchar | 16 | YES |  |
| OUTPUT_TEST | nvarchar | 16 | YES |  |
| START_TEST_FBK | smallint | 2 | YES |  |
| END_TEST_FBK | smallint | 2 | YES |  |
| OUTPUT_RESET | nvarchar | 16 | YES |  |
| ALARM_REPETITION | tinyint | 1 | YES |  |
| AUTODISABLE_REP | tinyint | 1 | YES |  |
| AUTODISABLE_TIME | smallint | 2 | YES |  |
| AUTODISABLE_ALARM | tinyint | 1 | YES |  |
| ENABLE_TEST | tinyint | 1 | YES |  |
| ENABLE_RESET | tinyint | 1 | YES |  |
| CHECK_TIME | smallint | 2 | YES |  |
| ACTIVATION_TIME | smallint | 2 | YES |  |
| ALTERNATE_BEHAVIOR | tinyint | 1 | YES |  |
| PREALARM_FBK | smallint | 2 | YES |  |
| PREALARM_RET_FBK | smallint | 2 | YES |  |
| SHORT_FBK | smallint | 2 | YES |  |
| SHORT_RET_FBK | smallint | 2 | YES |  |
| ALARM_FBK | smallint | 2 | YES |  |
| ALARM_RET_FBK | smallint | 2 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RET_FBK | smallint | 2 | YES |  |
| CUT_FBK | smallint | 2 | YES |  |
| CUT_RET_FBK | smallint | 2 | YES |  |
| ACTIVE_FBK | smallint | 2 | YES |  |
| DEACTIVE_FBK | smallint | 2 | YES |  |
| OPERATIVE_NOTE | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_DIGITAL_OUTPUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OUTPUT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| RTU_KEY | nvarchar | 16 | YES |  |
| ADDRESS | tinyint | 1 | NO |  |
| OUTPUT_TYPE | tinyint | 1 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| STARTING_VALUE | tinyint | 1 | YES |  |
| EXECUTION_TIME | smallint | 2 | YES |  |
| EXECUTION_TYPE | tinyint | 1 | YES |  |
| RESTORABLE | tinyint | 1 | YES |  |
| RESTORE_ON_DOWN | tinyint | 1 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_DIGITAL_OUTPUT_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OUTPUT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| RTU_KEY | nvarchar | 16 | YES |  |
| ADDRESS | tinyint | 1 | NO |  |
| OUTPUT_TYPE | tinyint | 1 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| NORMALITY_VALUE | tinyint | 1 | YES |  |
| STARTING_VALUE | tinyint | 1 | YES |  |
| EXECUTION_TIME | smallint | 2 | YES |  |
| EXECUTION_TYPE | tinyint | 1 | YES |  |
| RESTORABLE | tinyint | 1 | YES |  |
| RESTORE_ON_DOWN | tinyint | 1 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_LOGIC

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LOGIC_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| OPERATIVE_NOTE | nvarchar | 16 | YES |  |
| TIME_WINDOW | smallint | 2 | YES |  |
| INPUT_FOCUSED | smallint | 2 | YES |  |
| ALARM_FBK | smallint | 2 | YES |  |
| ALARM_RET_FBK | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_LOGIC_INPUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LOGIC_KEY | nvarchar | 16 | NO |  |
| INPUT_KEY | nvarchar | 16 | NO |  |

## ID_LOGIC_INPUT_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LOGIC_KEY | nvarchar | 16 | NO |  |
| INPUT_KEY | nvarchar | 16 | NO |  |

## ID_LOGIC_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LOGIC_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| ZONE_KEY | nvarchar | 16 | YES |  |
| OPERATIVE_NOTE | nvarchar | 16 | YES |  |
| TIME_WINDOW | smallint | 2 | YES |  |
| INPUT_FOCUSED | smallint | 2 | YES |  |
| ALARM_FBK | smallint | 2 | YES |  |
| ALARM_RET_FBK | smallint | 2 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_MT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| MT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| CTU_KEY | nvarchar | 16 | NO |  |
| MT_ID_CTU | tinyint | 1 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| MT_TYPE | tinyint | 1 | YES |  |
| ACTIVATION_FBK1 | smallint | 2 | YES |  |
| ACTIVATION_FBK2 | smallint | 2 | YES |  |
| ZONE1 | nvarchar | 16 | YES |  |
| DENIED_FBK | smallint | 2 | YES |  |
| ACT2_FBK | smallint | 2 | YES |  |
| ZONE2 | nvarchar | 16 | YES |  |
| ACT3_FBK | smallint | 2 | YES |  |
| ZONE3 | nvarchar | 16 | YES |  |
| ACT4_FBK | smallint | 2 | YES |  |
| ZONE4 | nvarchar | 16 | YES |  |
| ACT5_FBK | smallint | 2 | YES |  |
| ZONE5 | nvarchar | 16 | YES |  |
| ACT6_FBK | smallint | 2 | YES |  |
| ZONE6 | nvarchar | 16 | YES |  |
| ACT7_FBK | smallint | 2 | YES |  |
| ZONE7 | nvarchar | 16 | YES |  |
| ACT8_FBK | smallint | 2 | YES |  |
| ZONE8 | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_MT_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| MT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| CTU_KEY | nvarchar | 16 | NO |  |
| MT_ID_CTU | tinyint | 1 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| MT_TYPE | tinyint | 1 | YES |  |
| ACTIVATION_FBK1 | smallint | 2 | YES |  |
| ACTIVATION_FBK2 | smallint | 2 | YES |  |
| ZONE1 | nvarchar | 16 | YES |  |
| DENIED_FBK | smallint | 2 | YES |  |
| ACT2_FBK | smallint | 2 | YES |  |
| ZONE2 | nvarchar | 16 | YES |  |
| ACT3_FBK | smallint | 2 | YES |  |
| ZONE3 | nvarchar | 16 | YES |  |
| ACT4_FBK | smallint | 2 | YES |  |
| ZONE4 | nvarchar | 16 | YES |  |
| ACT5_FBK | smallint | 2 | YES |  |
| ZONE5 | nvarchar | 16 | YES |  |
| ACT6_FBK | smallint | 2 | YES |  |
| ZONE6 | nvarchar | 16 | YES |  |
| ACT7_FBK | smallint | 2 | YES |  |
| ZONE7 | nvarchar | 16 | YES |  |
| ACT8_FBK | smallint | 2 | YES |  |
| ZONE8 | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_OPERATIVE_NOTE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| NOTE_KEY | nvarchar | 16 | NO |  |
| NOTE_TEXT | nvarchar | 340 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_OPERATIVE_NOTE_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| NOTE_KEY | nvarchar | 16 | NO |  |
| NOTE_TEXT | nvarchar | 340 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_PLANT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PLANT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| BRIEF | nvarchar | 8 | YES |  |
| CTU_KEY | nvarchar | 16 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| FREE_NOTE | nvarchar | 510 | YES |  |
| DURESS_PWD | nvarchar | 12 | YES |  |
| DURESS_PROFILE | nvarchar | 16 | YES |  |
| DURESS_PROFILE_FBK | smallint | 2 | YES |  |
| CALENDAR_ID | tinyint | 1 | YES |  |
| TIMEOUT_MMI | smallint | 2 | YES |  |
| ZONE_FBK | smallint | 2 | YES |  |
| ZONE_RET_FBK | smallint | 2 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RET_FBK | smallint | 2 | YES |  |
| ARMED_FBK | smallint | 2 | YES |  |
| DISARMED_FBK | smallint | 2 | YES |  |
| MAINTENANCE_START_FBK | smallint | 2 | YES |  |
| MAINTENANCE_STOP_FBK | smallint | 2 | YES |  |
| TEST_START_FBK | smallint | 2 | YES |  |
| TEST_STOP_FBK | smallint | 2 | YES |  |
| OPERATIVE_NOTE | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_PLANT_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PLANT_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| BRIEF | nvarchar | 8 | YES |  |
| CTU_KEY | nvarchar | 16 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| FREE_NOTE | nvarchar | 510 | YES |  |
| DURESS_PWD | nvarchar | 12 | YES |  |
| DURESS_PROFILE | nvarchar | 16 | YES |  |
| DURESS_PROFILE_FBK | smallint | 2 | YES |  |
| CALENDAR_ID | tinyint | 1 | YES |  |
| TIMEOUT_MMI | smallint | 2 | YES |  |
| ZONE_FBK | smallint | 2 | YES |  |
| ZONE_RET_FBK | smallint | 2 | YES |  |
| TAMPER_FBK | smallint | 2 | YES |  |
| TAMPER_RET_FBK | smallint | 2 | YES |  |
| ARMED_FBK | smallint | 2 | YES |  |
| DISARMED_FBK | smallint | 2 | YES |  |
| MAINTENANCE_START_FBK | smallint | 2 | YES |  |
| MAINTENANCE_STOP_FBK | smallint | 2 | YES |  |
| TEST_START_FBK | smallint | 2 | YES |  |
| TEST_STOP_FBK | smallint | 2 | YES |  |
| OPERATIVE_NOTE | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_ZONE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ZONE_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| MAX_INPUT | smallint | 2 | YES |  |
| OPERATIVE_NOTE | nvarchar | 16 | YES |  |
| ZONE_MNG | tinyint | 1 | YES |  |
| TIME_WINDOW | smallint | 2 | YES |  |
| MAX_TIME_MANUAL | smallint | 2 | YES |  |
| ARM_DELAY | smallint | 2 | YES |  |
| ARM_NOTICE_FBK | smallint | 2 | YES |  |
| ARM_FBK | smallint | 2 | YES |  |
| DISARM_FBK | smallint | 2 | YES |  |
| PREALARM_FBK | smallint | 2 | YES |  |
| PREALARM_RET_FBK | smallint | 2 | YES |  |
| START_OVERTIME | smallint | 2 | YES |  |
| STOP_OVERTIME | smallint | 2 | YES |  |
| ENABLE_TEST | tinyint | 1 | YES |  |
| ENABLE_TEST_KO | tinyint | 1 | YES |  |
| TEST_START_FBK | smallint | 2 | YES |  |
| TEST_KO_FBK | smallint | 2 | YES |  |
| TEST_OK_FBK | smallint | 2 | YES |  |
| TEST_END_FBK | smallint | 2 | YES |  |
| INPUT_ALARM_FBK | smallint | 2 | YES |  |
| INPUT_ALARM_RET_FBK | smallint | 2 | YES |  |
| INPUT_TAMPER_FBK | smallint | 2 | YES |  |
| INPUT_TAMPER_RET_FBK | smallint | 2 | YES |  |
| ALT_START_DATE | datetime | 8 | YES |  |
| ALT_STOP_DATE | datetime | 8 | YES |  |
| ALT_START_TIME | datetime | 8 | YES |  |
| ALT_STOP_TIME | datetime | 8 | YES |  |
| ALT_REPRISE_TIME | datetime | 8 | YES |  |
| ALT_END_TIME | datetime | 8 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## ID_ZONE_PLAN

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ZONE_KEY | nvarchar | 16 | NO |  |
| PLAN_ID | tinyint | 1 | NO |  |
| MONDAY_ENABLE | tinyint | 1 | YES |  |
| TUESDAY_ENABLE | tinyint | 1 | YES |  |
| WEDNESDAY_ENABLE | tinyint | 1 | YES |  |
| THURSDAY_ENABLE | tinyint | 1 | YES |  |
| FRIDAY_ENABLE | tinyint | 1 | YES |  |
| SATURDAY_ENABLE | tinyint | 1 | YES |  |
| SUNDAY_ENABLE | tinyint | 1 | YES |  |
| SPECIALDAY_ENABLE | tinyint | 1 | YES |  |
| HOLIDAY_ENABLE | tinyint | 1 | YES |  |
| START_TIME | datetime | 8 | YES |  |
| STOP_TIME | datetime | 8 | YES |  |
| REPRISE_TIME | datetime | 8 | YES |  |
| END_TIME | datetime | 8 | YES |  |

## ID_ZONE_PLAN_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ZONE_KEY | nvarchar | 16 | NO |  |
| PLAN_ID | tinyint | 1 | NO |  |
| MONDAY_ENABLE | tinyint | 1 | YES |  |
| TUESDAY_ENABLE | tinyint | 1 | YES |  |
| WEDNESDAY_ENABLE | tinyint | 1 | YES |  |
| THURSDAY_ENABLE | tinyint | 1 | YES |  |
| FRIDAY_ENABLE | tinyint | 1 | YES |  |
| SATURDAY_ENABLE | tinyint | 1 | YES |  |
| SUNDAY_ENABLE | tinyint | 1 | YES |  |
| SPECIALDAY_ENABLE | tinyint | 1 | YES |  |
| HOLIDAY_ENABLE | tinyint | 1 | YES |  |
| START_TIME | datetime | 8 | YES |  |
| STOP_TIME | datetime | 8 | YES |  |
| REPRISE_TIME | datetime | 8 | YES |  |
| END_TIME | datetime | 8 | YES |  |

## ID_ZONE_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ZONE_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| PLANT | nvarchar | 16 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| PARAMETER_1 | nvarchar | 40 | YES |  |
| PARAMETER_2 | nvarchar | 40 | YES |  |
| MAX_INPUT | smallint | 2 | YES |  |
| OPERATIVE_NOTE | nvarchar | 16 | YES |  |
| ZONE_MNG | tinyint | 1 | YES |  |
| TIME_WINDOW | smallint | 2 | YES |  |
| MAX_TIME_MANUAL | smallint | 2 | YES |  |
| ARM_DELAY | smallint | 2 | YES |  |
| ARM_NOTICE_FBK | smallint | 2 | YES |  |
| ARM_FBK | smallint | 2 | YES |  |
| DISARM_FBK | smallint | 2 | YES |  |
| PREALARM_FBK | smallint | 2 | YES |  |
| PREALARM_RET_FBK | smallint | 2 | YES |  |
| START_OVERTIME | smallint | 2 | YES |  |
| STOP_OVERTIME | smallint | 2 | YES |  |
| ENABLE_TEST | tinyint | 1 | YES |  |
| ENABLE_TEST_KO | tinyint | 1 | YES |  |
| TEST_START_FBK | smallint | 2 | YES |  |
| TEST_KO_FBK | smallint | 2 | YES |  |
| TEST_OK_FBK | smallint | 2 | YES |  |
| TEST_END_FBK | smallint | 2 | YES |  |
| INPUT_ALARM_FBK | smallint | 2 | YES |  |
| INPUT_ALARM_RET_FBK | smallint | 2 | YES |  |
| INPUT_TAMPER_FBK | smallint | 2 | YES |  |
| INPUT_TAMPER_RET_FBK | smallint | 2 | YES |  |
| ALT_START_DATE | datetime | 8 | YES |  |
| ALT_STOP_DATE | datetime | 8 | YES |  |
| ALT_START_TIME | datetime | 8 | YES |  |
| ALT_STOP_TIME | datetime | 8 | YES |  |
| ALT_REPRISE_TIME | datetime | 8 | YES |  |
| ALT_END_TIME | datetime | 8 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## LocalAccessEvents

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CardID | int | 4 | NO |  |
| LastAccessDateTime | datetime | 8 | YES |  |
| LastDoorName | nvarchar | 100 | YES |  |
| LastEvtMessage | nvarchar | 40 | YES |  |
| LastZoneID | smallint | 2 | NO |  |
| LastZoneName | nvarchar | 32 | YES |  |
| LackOfUseDateTime | datetime | 8 | NO |  |

## MG_ALARM

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TYPOLOGY | nvarchar | 16 | NO |  |
| ALARM_VALUE | smallint | 2 | NO |  |
| ALARM_STRING | nvarchar | 16 | YES |  |
| ALARM_TYPE | tinyint | 1 | YES |  |
| ALARM_ASSOCIATED | smallint | 2 | YES |  |
| EVENT_FLAG | tinyint | 1 | YES |  |
| PRINT_FLAG | tinyint | 1 | YES |  |
| ALARM_LIST_FLAG | tinyint | 1 | YES |  |
| PERIPHERAL_RESET_FLAG | tinyint | 1 | YES |  |
| EMAIL_FLAG | tinyint | 1 | YES |  |
| ALARM_LIST | tinyint | 1 | YES |  |
| ALARM_PRIORITY | tinyint | 1 | YES |  |
| NOTES | nvarchar | 100 | YES |  |
| EBI_ID_PARAMETER | smallint | 2 | YES |  |
| EBI_ENABLE | tinyint | 1 | YES |  |
| EBI_PRIORITY | tinyint | 1 | YES |  |
| EBI_SUB_PRIORITY | tinyint | 1 | YES |  |
| EBI_EVENT_STRING | nvarchar | 16 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |
| ON_CTU | tinyint | 1 | YES |  |
| CTU_LOG | tinyint | 1 | YES |  |
| CTU_ALARM | tinyint | 1 | YES |  |
| CTU_PRINT | tinyint | 1 | YES |  |
| CTU_BUZZER | tinyint | 1 | YES |  |
| ENABLE_CFG | tinyint | 1 | YES |  |

## MG_ALARM_FILTER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OBJECT | nvarchar | 16 | NO |  |
| ALARM_VALUE | smallint | 2 | NO |  |
| EVENT_FLAG | tinyint | 1 | YES |  |
| PRINT_FLAG | tinyint | 1 | YES |  |
| ALARM_LIST_FLAG | tinyint | 1 | YES |  |
| PERIPHERAL_RESET_FLAG | tinyint | 1 | YES |  |
| EMAIL_FLAG | tinyint | 1 | YES |  |
| ALARM_LIST | tinyint | 1 | YES |  |
| ALARM_PRIORITY | tinyint | 1 | YES |  |
| EBI_ID_PARAMETER | smallint | 2 | YES |  |
| EBI_ENABLE | tinyint | 1 | YES |  |
| EBI_PRIORITY | tinyint | 1 | YES |  |
| EBI_SUB_PRIORITY | tinyint | 1 | YES |  |

## MG_COMMAND

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TYPOLOGY | nvarchar | 16 | NO |  |
| COMMAND_VALUE | tinyint | 1 | NO |  |
| COMMAND_STRING | nvarchar | 16 | YES |  |
| COMMAND_RIGHT | nvarchar | 16 | YES |  |
| NOTES | nvarchar | 100 | YES |  |
| EBI_PARAMETER | nvarchar | 510 | YES |  |
| EBI_VALUE | tinyint | 1 | YES |  |
| EBI_NOTES | nvarchar | 100 | YES |  |
| SHAREABLE | tinyint | 1 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |
| ON_CTU | tinyint | 1 | YES |  |
| ON_FEEDBACK | tinyint | 1 | YES |  |

## MG_EBI_PARAMETER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TYPOLOGY | nvarchar | 16 | NO |  |
| PARAMETER | nvarchar | 510 | NO |  |
| ENABLE | tinyint | 1 | YES |  |
| ID_PARAMETER | smallint | 2 | YES |  |
| ID_TYPE_PARAMETER | tinyint | 1 | YES |  |
| NOTES | nvarchar | 100 | YES |  |

## MG_EBI_STATUS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TYPOLOGY | nvarchar | 16 | NO |  |
| EBI_ASS_PARAMETER | nvarchar | 510 | NO |  |
| STATUS | smallint | 2 | NO |  |
| COMMAND_VALUE | tinyint | 1 | YES |  |
| EBI_ASS_VALUE | tinyint | 1 | YES |  |
| EBI_ASS_DEF_VALUE | tinyint | 1 | YES |  |
| TYPE_CONTROL | tinyint | 1 | YES |  |
| NOTES | nvarchar | 100 | YES |  |

## MG_FORMAT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FORMAT_ID | tinyint | 1 | NO |  |
| FORMAT_ID_FATHER | tinyint | 1 | YES |  |
| ENHANCED_BEHAVIOR | tinyint | 1 | YES |  |
| DIM_BANK | int | 4 | YES |  |
| TOT_BANK | int | 4 | YES |  |
| FLASH_BANK | smallint | 2 | YES |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| TYPE_FW | tinyint | 1 | YES |  |
| READONLY | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_FORMAT_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FORMAT_ID | tinyint | 1 | NO |  |
| TABLE_NAME | nvarchar | 16 | NO |  |
| DOUBLE_ENCODING | tinyint | 1 | NO |  |
| ENHANCED_BEHAVIOR | tinyint | 1 | NO |  |
| PERSONALIZABLE | tinyint | 1 | YES |  |
| TABLE_ID | tinyint | 1 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| RECORD_TYPE | tinyint | 1 | YES |  |
| LEN_RECORD | smallint | 2 | YES |  |
| LEN_CHECK | int | 4 | YES |  |
| MULTIPLER | tinyint | 1 | YES |  |
| FACTORY_RECNUMBER | int | 4 | YES |  |
| CUSTOM_RECNUMBER | int | 4 | YES |  |
| MAX_RECNUMBER | int | 4 | YES |  |
| TABLE_LOCATION | tinyint | 1 | YES |  |
| TYPE_FW | tinyint | 1 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |
| LINKED_TABLE_NAME | nvarchar | 16 | YES |  |

## MG_FTP_STATUS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| DOWNLOAD_TIME | datetime | 8 | YES |  |
| CTU_KEY | nvarchar | 16 | NO |  |
| RTU_KEY | nvarchar | 16 | NO |  |
| DOWNLOAD_TYPE | tinyint | 1 | NO |  |
| BLOCK_NUMBER | int | 4 | YES |  |
| FILE_INDEX | tinyint | 1 | YES |  |
| DOWNLOAD_FILE | nvarchar | 510 | YES |  |
| TOTAL_BLOCK_NUMBER | int | 4 | YES |  |
| DOWNLOAD_STATUS | tinyint | 1 | YES |  |

## MG_LANGUAGE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_STRING | nvarchar | 16 | NO |  |
| STRINGA | nvarchar | 510 | YES |  |
| ENGLISH | nvarchar | 510 | YES |  |
| CUSTOMIZED | nvarchar | 510 | YES |  |
| CUSTOMIZED2 | nvarchar | 510 | YES |  |
| COMMENT_STRING | nvarchar | 510 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |

## MG_LANGUAGE_DB

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| DB_FIELD | nvarchar | 100 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |

## MG_STATUS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TYPOLOGY | nvarchar | 16 | NO |  |
| STATUS | smallint | 2 | NO |  |
| STATUS_STRING | nvarchar | 16 | YES |  |
| BITMAP | nvarchar | 32 | YES |  |
| BIT_MASK | int | 4 | YES |  |
| RESULT_MASK | int | 4 | YES |  |
| NOTES | nvarchar | 100 | YES |  |
| EBI_STATUS_VALUE | tinyint | 1 | YES |  |
| EBI_QUALITY | tinyint | 1 | YES |  |
| ID_SHORT_STRING | nvarchar | 16 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |
| ON_CTU | tinyint | 1 | YES |  |

## MG_TYPE_CARD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_CARD | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_CATEGORY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_CATEGORY | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_CODING

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_CODING | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| FILTER | nvarchar | 100 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_CTU

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_CTU | tinyint | 1 | NO |  |
| IS_COMBO | tinyint | 1 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| SHAREABLE | tinyint | 1 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_DST

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_DST | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| TZ_DELTA_GMT | smallint | 2 | YES |  |
| TO_DST_TYPE | tinyint | 1 | YES |  |
| TO_DST_FIX_DATE | datetime | 8 | YES |  |
| TO_DST_MM | tinyint | 1 | YES |  |
| TO_DST_WEEK | tinyint | 1 | YES |  |
| TO_DST_WDAY | tinyint | 1 | YES |  |
| TO_DST_TIME | datetime | 8 | YES |  |
| TO_DST_DELTA | smallint | 2 | YES |  |
| TO_SOLAR_TYPE | tinyint | 1 | YES |  |
| TO_SOLAR_FIX_DATE | datetime | 8 | YES |  |
| TO_SOLAR_MM | tinyint | 1 | YES |  |
| TO_SOLAR_WEEK | tinyint | 1 | YES |  |
| TO_SOLAR_WDAY | tinyint | 1 | YES |  |
| TO_SOLAR_TIME | datetime | 8 | YES |  |
| TO_SOLAR_DELTA | smallint | 2 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_EBI_LEVEL

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_LEVEL | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_EVENT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_EVENT | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_GATE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_SBI | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| CANBE_SINGLE | tinyint | 1 | YES |  |
| CANBE_DOUBLE | tinyint | 1 | YES |  |
| CANBE_TSTA | int | 4 | YES |  |
| CANBE_SESAMO | tinyint | 1 | YES |  |
| ENABLE_LATCH | tinyint | 1 | YES |  |
| VISIBLE | tinyint | 1 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_ID_FUNCTION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_FUNCTION | tinyint | 1 | NO |  |
| PARENT | smallint | 2 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | smallint | 2 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_INFO_FBK

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_INFO | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_INPUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| REPETITION | tinyint | 1 | YES |  |
| RESET | tinyint | 1 | YES |  |
| ACTIVATION_TIME | smallint | 2 | YES |  |
| CHECK_TIME | smallint | 2 | YES |  |
| ORDER_ID | smallint | 2 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_LAYOUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_LAYOUT | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_LIFT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_MODE | tinyint | 1 | NO |  |
| ID_PROTOCOL | tinyint | 1 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| SERIAL_1 | tinyint | 1 | YES |  |
| SERIAL_3 | tinyint | 1 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_MIFARE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_MIFARE | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_MODE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_MODE | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_MT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_MT | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| N_DISPLAY | tinyint | 1 | YES |  |
| N_KEYBOARD | tinyint | 1 | YES |  |
| N_READER | tinyint | 1 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_OUTPUT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | smallint | 2 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_PARITY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_PARITY | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_RTU

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_RTU | tinyint | 1 | NO |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ID_HW_TYPE | tinyint | 1 | YES |  |
| FILE_BMP | nvarchar | 510 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| PROGRAM_ID | nvarchar | 46 | YES |  |
| DISPLAY_NAME | nvarchar | 100 | YES |  |
| ENABLE_ELPASS | tinyint | 1 | YES |  |
| ENABLE_FEEDBACK | tinyint | 1 | YES |  |
| ENABLE_LAYOUT | tinyint | 1 | YES |  |
| PREFIX_TYPE | nvarchar | 6 | YES |  |
| CHIPS | nvarchar | 20 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_SBI

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_SBI | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_SESAMO_DEVICE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_SESAMO_DEVICE | tinyint | 1 | NO |  |
| TYPOLOGY | varchar | 8 | YES |  |
| ID_STRING | varchar | 8 | YES |  |
| FILE_BMP | varchar | 255 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| DISPLAY_NAME | varchar | 50 | YES |  |
| NOTES | varchar | 255 | YES |  |

## MG_TYPE_SHOW

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_SHOW | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_TKEY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_TK | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ID_TYPE_TSERVER | tinyint | 1 | YES |  |
| N_DISPLAY | tinyint | 1 | YES |  |
| N_KEYBOARD | tinyint | 1 | YES |  |
| N_READER | tinyint | 1 | YES |  |
| IS_COMBO | tinyint | 1 | YES |  |
| IO_CFG | tinyint | 1 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPE_TRANSIT_STATUS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_TRANSIT_STATUS | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |
| ALARM_ID | smallint | 2 | YES |  |

## MG_TYPE_ZONE_MNG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_MNG | tinyint | 1 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORDER_ID | smallint | 2 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## MG_TYPOLOGY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TYPOLOGY | nvarchar | 16 | NO |  |
| RIGHT_MENU | nvarchar | 16 | YES |  |
| KIND | tinyint | 1 | NO |  |
| DUPLICABLE | tinyint | 1 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |
| EBI_POINT_DETAIL | nvarchar | 510 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ORIGIN | nvarchar | 16 | YES |  |
| NOTES | nvarchar | 100 | YES |  |

## Numbers

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RecordNumber | int | 4 | NO |  |

## OperatorProfile

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID | int | 4 | NO |  |
| Name | nvarchar | 72 | NO |  |
| Description | nvarchar | 256 | NO |  |
| ReadOnly | bit | 1 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |

## OperatorTask

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TreeID | int | 4 | NO |  |
| ParentID | int | 4 | YES |  |
| Name | nvarchar | 16 | NO |  |
| StringID | int | 4 | NO |  |

## OperatorTaskDependencies

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TreeID | int | 4 | NO |  |
| DependsOnTreeID | int | 4 | NO |  |

## OrganizationModel

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LocationID | int | 4 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| EntityName | nvarchar | 80 | NO |  |
| TreePath | nvarchar | 510 | NO |  |
| IsCompany | bit | 1 | NO |  |
| DownloadRequired | bit | 1 | NO |  |
| PointDetailDisplay | nvarchar | 80 | NO |  |
| AssociatedDisplay | nvarchar | 80 | NO |  |
| DESCRIPTION | nvarchar | 510 | NO |  |
| ExternalKey | nvarchar | 510 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## PageProperties

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PageID | int | 4 | NO |  |
| ControlBarID | int | 4 | NO |  |
| ControlBarCssClass | nvarchar | 510 | NO |  |
| ColumnCount | smallint | 2 | NO |  |
| EntityName | nvarchar | 800 | NO |  |
| PageType | smallint | 2 | NO |  |
| DBConfigContainerPageID | int | 4 | NO |  |
| Comment | nvarchar | 8000 | NO |  |
| Version | nvarchar | 510 | NO |  |
| TitleStringID | int | 4 | YES |  |
| NoCache | bit | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ProfileTaskAssignment

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ProfileID | int | 4 | NO |  |
| TaskID | int | 4 | NO |  |

## RangeProperties

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TableName | nvarchar | 256 | NO |  |
| FieldName | nvarchar | 256 | NO |  |
| Minimum | decimal | 9 | NO |  |
| Maximum | decimal | 9 | NO |  |
| StringID | int | 4 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ReplicatedAccessLevelZonesTPs

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| AccessLevelServerRecordNumber | int | 4 | NO |  |
| ZoneServerRecordNumber | smallint | 2 | NO |  |
| TimePeriodServerRecordNumber | smallint | 2 | NO |  |
| ServerID | smallint | 2 | NO |  |
| ThreatLevel | smallint | 2 | NO |  |
| UpdatedFlag | tinyint | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ReplicatedDownloads

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RequestingServerID | smallint | 2 | NO |  |
| DestinationServerID | smallint | 2 | NO |  |
| RequestTime | datetime | 8 | NO |  |
| CRT | smallint | 2 | NO |  |
| RequestType | smallint | 2 | NO |  |
| ItemID | int | 4 | NO |  |
| Card | decimal | 13 | NO |  |
| Cred | smallint | 2 | NO |  |
| PGAPForgive | bit | 1 | NO |  |
| RowGuid | uniqueidentifier | 16 | NO |  |

## ReplicatedStoredProcedureCalls

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| StoredProcedure | nvarchar | 256 | NO |  |
| Parameters | xml | -1 | YES |  |
| SourceServerID | smallint | 2 | NO |  |
| DestinationServerID | smallint | 2 | NO |  |
| RequestTime | datetime | 8 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ReplicatedTimePeriods

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TimePeriodRecordNumber | smallint | 2 | NO |  |
| TimePeriodName | nvarchar | 100 | NO |  |
| TimePeriodDescription | nvarchar | 100 | NO |  |
| ServerID | smallint | 2 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ReplicatedZonePoints

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ZoneServerRecordNumber | smallint | 2 | NO |  |
| PointNo | bigint | 8 | NO |  |
| PointID | nvarchar | 80 | NO |  |
| ServerID | smallint | 2 | NO |  |
| RTUType | smallint | 2 | NO |  |
| RTUNo | bigint | 8 | NO |  |
| PointAddr | smallint | 2 | NO |  |
| RdrCred | smallint | 2 | NO |  |
| ExitZoneRecord | smallint | 2 | NO |  |
| UpdatedFlag | tinyint | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ReplicatedZones

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ZoneServerRecordNumber | smallint | 2 | NO |  |
| ServerID | smallint | 2 | NO |  |
| ZoneName | nvarchar | 100 | NO |  |
| ZoneDescription | nvarchar | 100 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| Outside | bit | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## ReportAreaMap

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LocationTagName | nvarchar | 80 | NO |  |
| LocationFullName | nvarchar | 400 | NO |  |

## ReportCriteria

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ReportNumber | int | 4 | NO |  |
| ReportType | int | 4 | NO |  |
| FieldName | varchar | 32 | NO |  |
| FieldLabel | varchar | 50 | YES |  |
| FieldValue | varchar | 255 | YES |  |
| IsUserField | bit | 1 | NO |  |
| IsComboField | bit | 1 | NO |  |

## SCANNER_REGION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| REGION_ID | smallint | 2 | NO |  |
| REGION_NAME | nvarchar | 200 | NO |  |
| COUNTRY_ID | smallint | 2 | NO |  |
| COUNTRY_NAME | nvarchar | 200 | NO |  |
| STATE_ID | smallint | 2 | NO |  |
| STATE_NAME | nvarchar | 200 | NO |  |
| COMMENTS | nvarchar | 200 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## SY_ACCEPTANCE_REASON

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| REASON_ID | smallint | 2 | NO |  |
| REASON_DESCRIPTION | nvarchar | 510 | YES |  |
| REASON_TYPE | tinyint | 1 | YES |  |

## SY_ALARMS_LIST

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OBJECT | nvarchar | 16 | NO |  |
| PERIPHERAL_DATE | datetime | 8 | NO |  |
| CENTRE_DATE | datetime | 8 | YES |  |
| ALARM_VALUE | smallint | 2 | NO |  |
| ALARM_STATUS | tinyint | 1 | YES |  |
| PARAMETER | nvarchar | 64 | YES |  |
| PRINT_ALARM_LIST | tinyint | 1 | YES |  |
| PRINT_ALARM_PRIORITY | tinyint | 1 | YES |  |
| PRINT_DATE_TIME | nvarchar | 40 | YES |  |

## SY_ATTACH

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OBJECT | nvarchar | 16 | NO |  |
| CENTER_TABLE | nvarchar | 64 | NO |  |
| MAX_RECORD | int | 4 | YES |  |
| PROGRESSIVE | tinyint | 1 | NO |  |

## SY_BATCH

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ACTIVITY_ID | smallint | 2 | NO |  |
| TYPE_ACTIVITY | tinyint | 1 | YES |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| ENABLING | tinyint | 1 | YES |  |
| START_TIME | datetime | 8 | YES |  |
| STOP_TIME | datetime | 8 | YES |  |
| TIMESLOT | smallint | 2 | YES |  |
| DISPLACEMENT | smallint | 2 | YES |  |
| FIXED_TIME_01 | datetime | 8 | YES |  |
| FIXED_TIME_02 | datetime | 8 | YES |  |
| FIXED_TIME_03 | datetime | 8 | YES |  |
| FIXED_TIME_04 | datetime | 8 | YES |  |
| FIXED_TIME_05 | datetime | 8 | YES |  |
| FIXED_TIME_06 | datetime | 8 | YES |  |
| FIXED_TIME_07 | datetime | 8 | YES |  |
| FIXED_TIME_08 | datetime | 8 | YES |  |
| FIXED_TIME_09 | datetime | 8 | YES |  |
| FIXED_TIME_10 | datetime | 8 | YES |  |
| FIXED_TIME_11 | datetime | 8 | YES |  |
| FIXED_TIME_12 | datetime | 8 | YES |  |
| START_SYSTEM_EXECUTION | tinyint | 1 | YES |  |
| COMMAND_LINE | nvarchar | 100 | YES |  |
| IMPEXP_CNV | nvarchar | 510 | YES |  |
| MONDAY_ENABLE | tinyint | 1 | YES |  |
| TUESDAY_ENABLE | tinyint | 1 | YES |  |
| WEDNESDAY_ENABLE | tinyint | 1 | YES |  |
| THURSDAY_ENABLE | tinyint | 1 | YES |  |
| FRIDAY_ENABLE | tinyint | 1 | YES |  |
| SATURDAY_ENABLE | tinyint | 1 | YES |  |
| SUNDAY_ENABLE | tinyint | 1 | YES |  |
| SPECIALDAY_ENABLE | tinyint | 1 | YES |  |
| HOLIDAY_ENABLE | tinyint | 1 | YES |  |
| ONLY_GOOD | tinyint | 1 | YES |  |
| ACCESS_CONTROL | tinyint | 1 | YES |  |
| TIME_ATTENDANCE | tinyint | 1 | YES |  |
| CANTEEN | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| TYPE_EMPLOYEE | tinyint | 1 | YES |  |
| TYPE_EXTERNAL_REGULAR | tinyint | 1 | YES |  |
| TYPE_VEHICLE | tinyint | 1 | YES |  |
| TYPE_VISITOR | tinyint | 1 | YES |  |
| TYPE_CUSTOM1 | tinyint | 1 | YES |  |
| TYPE_CUSTOM2 | tinyint | 1 | YES |  |
| TYPE_RANGE | tinyint | 1 | YES |  |
| TYPE_ASSET | tinyint | 1 | YES |  |
| LDAP_CONFIG_ID | int | 4 | YES |  |

## SY_CABLING_COMPOSITION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| GATEWAY_TYPE | tinyint | 1 | NO |  |
| VTERMINAL_TYPE | tinyint | 1 | NO |  |
| DIGITAL_ID | nvarchar | 6 | NO |  |
| CANBE_SESAMO | tinyint | 1 | NO |  |
| CABLING_ORDER | tinyint | 1 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ENABLE_LATCH | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## SY_CODE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CODE_ID | int | 4 | NO |  |
| ROW_NUMBER | int | 4 | NO |  |
| ROW_CODE | nvarchar | 4000 | YES |  |

## SY_CODE_ID

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CODE_ID | int | 4 | NO |  |
| DESCRIPTION | nvarchar | 510 | YES |  |
| USED_BY | tinyint | 1 | YES |  |

## SY_COMPOSITION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_TEMAKEY | tinyint | 1 | NO |  |
| ID_TYPE_RTU | tinyint | 1 | NO |  |
| NOTES | nvarchar | 100 | YES |  |

## SY_CONSTRAINT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| CONSTRAINT_NAME | nvarchar | 510 | NO |  |
| TARGET_TABLE | nvarchar | 510 | YES |  |
| TARGET_FIELD | nvarchar | 510 | YES |  |
| SOURCE_TABLE | nvarchar | 510 | YES |  |
| SOURCE_FIELD | nvarchar | 510 | YES |  |
| ENABLE_ON_DELETE | tinyint | 1 | YES |  |
| ENABLE_ON_UPDATE | tinyint | 1 | YES |  |

## SY_DEFINITION_PLANT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| TITLE | nvarchar | 40 | YES |  |
| BACKGROUND | nvarchar | 100 | YES |  |
| LOGO_PLANT | nvarchar | 100 | YES |  |
| NUM_WS | int | 4 | YES |  |

## SY_DISPATCHER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| APPLICATION | smallint | 2 | NO |  |
| SERVICE | smallint | 2 | NO |  |
| QUEUE | nvarchar | 64 | NO |  |

## SY_EBI_ACK

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| EBI_COOKIE | int | 4 | NO |  |
| OBJECT | nvarchar | 16 | YES |  |
| EMISSION_TIME | datetime | 8 | YES |  |
| CENTRAL_TIME | datetime | 8 | YES |  |
| RETURN_TIME | datetime | 8 | YES |  |
| ALARM_VALUE | smallint | 2 | YES |  |
| ALARM_ASSOCIATED | smallint | 2 | YES |  |
| ALARM_TYPE | tinyint | 1 | YES |  |
| ALARM_DESCRIPTION | nvarchar | 60 | YES |  |
| ALARM_PARAMETER | nvarchar | 70 | YES |  |
| STR_EVENT | nvarchar | 14 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| EBI_PRIORITY | tinyint | 1 | YES |  |
| EBI_SUB_PRIORITY | tinyint | 1 | YES |  |
| EMISSION_STATUS | tinyint | 1 | YES |  |
| VIDEOLINK | tinyint | 1 | YES |  |

## SY_EBI_ALARM

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_ALARM | int | 4 | NO |  |
| OBJECT | nvarchar | 16 | YES |  |
| POINT_NAME | nvarchar | 80 | YES |  |
| EMISSION_TIME | datetime | 8 | YES |  |
| CENTRAL_TIME | datetime | 8 | YES |  |
| ALARM_VALUE | smallint | 2 | YES |  |
| ALARM_ASSOCIATED | smallint | 2 | YES |  |
| ALARM_TYPE | tinyint | 1 | YES |  |
| ALARM_DESCRIPTION | nvarchar | 60 | YES |  |
| ALARM_PARAMETER | nvarchar | 70 | YES |  |
| STR_EVENT | nvarchar | 14 | YES |  |
| EBI_COOKIE | int | 4 | YES |  |
| EBI_PRIORITY | tinyint | 1 | YES |  |
| EBI_SUB_PRIORITY | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| VIDEOLINK | tinyint | 1 | YES |  |

## SY_EBI_ALARM_PROG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| LAST_ID | int | 4 | YES |  |

## SY_EBI_EVENT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| EVENT_ID | int | 4 | NO |  |
| EMISSION_DATE | datetime | 8 | YES |  |
| EVENT_TYPE | tinyint | 1 | YES |  |
| STR_EVENT_TYPE | nvarchar | 510 | YES |  |
| OBJECT | nvarchar | 16 | YES |  |
| POINT_NAME | nvarchar | 80 | YES |  |
| OBJECT_DESCRIPTION | nvarchar | 264 | YES |  |
| STATUS_DESCRIPTION | nvarchar | 70 | YES |  |
| PARAMETER | nvarchar | 510 | YES |  |
| PARAMETER_2 | nvarchar | 510 | YES |  |
| PARAMETER_3 | nvarchar | 510 | YES |  |
| PARAMETER_4 | nvarchar | 510 | YES |  |
| PARAMETER_5 | nvarchar | 510 | YES |  |
| RECEIVING_DATE | datetime | 8 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## SY_EBI_OPERATOR

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| EBI_OPERATOR | nvarchar | 510 | NO |  |
| DESCRIPTION | nvarchar | 510 | YES |  |
| PROFILE | nvarchar | 32 | YES |  |
| EBI_LEVEL | tinyint | 1 | YES |  |

## SY_EBI_TRANSIT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TRANSIT | int | 4 | NO |  |
| CENTRAL_TIME | datetime | 8 | YES |  |
| CARD_NUMBER | nvarchar | 40 | YES |  |
| LAYOUT_ID | int | 4 | YES |  |
| TRANSIT_DATE | datetime | 8 | YES |  |
| TRANSIT_STATUS | tinyint | 1 | YES |  |
| STR_TRANSIT_STATUS | nvarchar | 40 | YES |  |
| SBI_TYPE | tinyint | 1 | YES |  |
| SBI_ID | int | 4 | YES |  |
| SURNAME | nvarchar | 70 | YES |  |
| NAME | nvarchar | 50 | YES |  |
| IDENTIFIER | nvarchar | 40 | YES |  |
| ZONE | nvarchar | 16 | YES |  |
| TERMINAL | nvarchar | 16 | YES |  |
| REASON | nvarchar | 10 | YES |  |
| POINT_NAME | nvarchar | 80 | YES |  |
| ACCESS_CONTROL_TYPE | tinyint | 1 | YES |  |
| TIME_ATTENDANCE_TYPE | tinyint | 1 | YES |  |
| CANTEEN_TYPE | tinyint | 1 | YES |  |
| SAP_TYPE | tinyint | 1 | YES |  |
| STR_TRANSIT_TYPE | nvarchar | 32 | YES |  |
| DIRECTION | tinyint | 1 | YES |  |
| STR_DIRECTION | nvarchar | 32 | YES |  |
| USER_TYPE | nvarchar | 48 | YES |  |
| VISITOR_COMPANY | nvarchar | 40 | YES |  |
| PARAMETER_1 | nvarchar | 200 | YES |  |
| PARAMETER_2 | nvarchar | 200 | YES |  |
| PARAMETER_3 | nvarchar | 200 | YES |  |
| PARAMETER_4 | nvarchar | 200 | YES |  |
| PARAMETER_5 | nvarchar | 200 | YES |  |
| GRANTED | tinyint | 1 | YES |  |
| KEY_CL01 | nvarchar | 100 | YES |  |
| CL01 | nvarchar | 100 | YES |  |
| KEY_CL02 | nvarchar | 100 | YES |  |
| CL02 | nvarchar | 100 | YES |  |
| KEY_CL03 | nvarchar | 100 | YES |  |
| CL03 | nvarchar | 100 | YES |  |
| KEY_CL04 | nvarchar | 100 | YES |  |
| CL04 | nvarchar | 100 | YES |  |
| KEY_CL05 | nvarchar | 100 | YES |  |
| CL05 | nvarchar | 100 | YES |  |
| KEY_CL06 | nvarchar | 100 | YES |  |
| CL06 | nvarchar | 100 | YES |  |
| KEY_CL07 | nvarchar | 100 | YES |  |
| CL07 | nvarchar | 100 | YES |  |
| KEY_CL08 | nvarchar | 100 | YES |  |
| CL08 | nvarchar | 100 | YES |  |
| KEY_CL09 | nvarchar | 100 | YES |  |
| CL09 | nvarchar | 100 | YES |  |
| KEY_CL10 | nvarchar | 100 | YES |  |
| CL10 | nvarchar | 100 | YES |  |
| SITE | smallint | 2 | YES |  |
| SITE_ACRONYM | nvarchar | 16 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |
| EBI_PRIORITY | tinyint | 1 | YES |  |
| EBI_SUB_PRIORITY | tinyint | 1 | YES |  |
| EBI_CONDITION | nvarchar | 60 | YES |  |
| VIDEOLINK | tinyint | 1 | YES |  |

## SY_EBI_TRANSIT_PROG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| LAST_ID | int | 4 | YES |  |

## SY_FILTERS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FORM_NAME | nvarchar | 40 | NO |  |
| FILTER_NAME | nvarchar | 60 | NO |  |
| FILTER_PROGR | smallint | 2 | NO |  |
| FIELD_NAME | nvarchar | 100 | YES |  |
| FIELD_TYPE | smallint | 2 | YES |  |
| FIELD_TEST | nvarchar | 32 | YES |  |
| FIELD_VALUE | nvarchar | 510 | YES |  |
| EXPR_BOOL | nvarchar | 32 | YES |  |

## SY_FLEX_QUEUE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_REQUEST_PROG | int | 4 | NO |  |
| BATCH_ACTIVITY_ID | smallint | 2 | YES |  |
| WS_KEY | nvarchar | 510 | YES |  |
| OPERATOR | nvarchar | 510 | YES |  |
| SOURCE_EXP | nvarchar | 510 | YES |  |
| SOURCE_TABLE | nvarchar | 510 | YES |  |
| SOURCE_ACTION | smallint | 2 | YES |  |
| SOURCE_WHERE | nvarchar | 4000 | YES |  |
| LINKED_TABLE | nvarchar | 510 | YES |  |
| DESTINATION_FILE | nvarchar | 510 | YES |  |

## SY_FORWARD_MSG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| APPL | tinyint | 1 | NO |  |
| SERV | tinyint | 1 | NO |  |
| ALGORITHM | tinyint | 1 | YES |  |

## SY_GROUP_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| GROUP_ID | tinyint | 1 | NO |  |
| MODE_ID | tinyint | 1 | YES |  |
| BACKUP_ID | tinyint | 1 | YES |  |
| PORT_ID | tinyint | 1 | YES |  |
| RAS_KEY | nvarchar | 16 | YES |  |

## SY_LDAP_LOGIN_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID | int | 4 | NO |  |
| LDAP_LOGIN_ENABLED | tinyint | 1 | YES |  |
| SERVER | nvarchar | 510 | YES |  |
| PORT | int | 4 | YES |  |
| SSL_ENABLED | tinyint | 1 | YES |  |
| LDAP_LOGIN | nvarchar | 510 | YES |  |
| LDAP_PASSWORD | nvarchar | 510 | YES |  |
| CLIENT_SIZE_LIMIT | int | 4 | YES |  |
| CLIENT_TIME_LIMIT | int | 4 | YES |  |
| SEARCH_BASE | nvarchar | 510 | YES |  |
| SEARCH_SCOPE | tinyint | 1 | YES |  |
| SEARCH_FILTER | nvarchar | 4000 | YES |  |
| ANONYMOUS_BIND | tinyint | 1 | YES |  |
| LOGIN_ATTRIBUTE | nvarchar | 510 | YES |  |

## SY_MODEM_CONFIGURATION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_MODEM | tinyint | 1 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| STR_INIT | nvarchar | 200 | YES |  |
| STR_CALL | nvarchar | 100 | YES |  |
| STR_CLOSE | nvarchar | 20 | YES |  |
| STR_ESCAPE | nvarchar | 20 | YES |  |

## SY_MT_COMPOSITION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_TYPE_MT | tinyint | 1 | NO |  |
| ID_TYPE_RTU | tinyint | 1 | NO |  |
| NOTES | nvarchar | 510 | YES |  |

## SY_NODE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OBJECT | nvarchar | 16 | NO |  |
| NODE_TYPE | tinyint | 1 | YES |  |
| CS | tinyint | 1 | NO |  |
| GROUP_ID | tinyint | 1 | NO |  |
| NODE_ID | tinyint | 1 | NO |  |
| SUB_NODE_ID | tinyint | 1 | NO |  |
| ACRONYM_STATUS | nvarchar | 16 | YES |  |
| PERIPHERAL_ACRONYM | nvarchar | 8 | YES |  |
| NODE_ENABLE | tinyint | 1 | YES |  |
| SHARED_OBJECT | nvarchar | 16 | YES |  |
| BACKUP_PRESENT | tinyint | 1 | YES |  |

## SY_NODE_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OBJECT | nvarchar | 16 | NO |  |
| NODE_TYPE | tinyint | 1 | YES |  |
| CS | tinyint | 1 | NO |  |
| GROUP_ID | tinyint | 1 | NO |  |
| NODE_ID | tinyint | 1 | NO |  |
| SUB_NODE_ID | tinyint | 1 | NO |  |
| ACRONYM_STATUS | nvarchar | 16 | YES |  |
| PERIPHERAL_ACRONYM | nvarchar | 8 | YES |  |
| NODE_ENABLE | tinyint | 1 | YES |  |
| SHARED_OBJECT | nvarchar | 16 | YES |  |
| BACKUP_PRESENT | tinyint | 1 | YES |  |

## SY_OBJECT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OBJECT | nvarchar | 16 | NO |  |
| POINT_NAME | nvarchar | 80 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| STATUS | smallint | 2 | YES |  |
| PARENT_NODE | nvarchar | 16 | YES |  |
| PERIPHERAL_NODE | nvarchar | 16 | YES |  |
| STATUS_BIT_MASK | int | 4 | YES |  |
| EBI_POINT_DETAIL | nvarchar | 510 | YES |  |
| EBI_GROUP_DETAIL | nvarchar | 510 | YES |  |
| EBI_ASSOCIATED_DISPLAY | nvarchar | 510 | YES |  |
| EBI_INSTRUCTION_DISPLAY | nvarchar | 510 | YES |  |
| EBI_CREATETIME | datetime | 8 | YES |  |
| EBI_CONTROL_CONFIRM | tinyint | 1 | YES |  |
| EBI_ESIG_TYPE | tinyint | 1 | YES |  |
| EBI_ESIG_REASON | smallint | 2 | YES |  |
| EBI_ESIG_MEANING_1 | nvarchar | 48 | YES |  |
| EBI_ESIG_MEANING_2 | nvarchar | 48 | YES |  |
| EBI_ESIG_LEVEL_2 | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## SY_OBJECT_UP

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| OBJECT | nvarchar | 16 | NO |  |
| POINT_NAME | nvarchar | 80 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| TYPOLOGY | nvarchar | 16 | YES |  |
| STATUS | smallint | 2 | YES |  |
| PARENT_NODE | nvarchar | 16 | YES |  |
| PERIPHERAL_NODE | nvarchar | 16 | YES |  |
| STATUS_BIT_MASK | int | 4 | YES |  |
| EBI_POINT_DETAIL | nvarchar | 510 | YES |  |
| EBI_GROUP_DETAIL | nvarchar | 510 | YES |  |
| EBI_ASSOCIATED_DISPLAY | nvarchar | 510 | YES |  |
| EBI_INSTRUCTION_DISPLAY | nvarchar | 510 | YES |  |
| EBI_CREATETIME | datetime | 8 | YES |  |
| EBI_CONTROL_CONFIRM | tinyint | 1 | YES |  |
| EBI_ESIG_TYPE | tinyint | 1 | YES |  |
| EBI_ESIG_REASON | smallint | 2 | YES |  |
| EBI_ESIG_MEANING_1 | nvarchar | 48 | YES |  |
| EBI_ESIG_MEANING_2 | nvarchar | 48 | YES |  |
| EBI_ESIG_LEVEL_2 | tinyint | 1 | YES |  |
| SITE | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## SY_PORT_CONFIGURATION

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PORT | tinyint | 1 | NO |  |
| BAUDRATE | int | 4 | YES |  |
| PARITY | nvarchar | 2 | YES |  |
| DATABITS | tinyint | 1 | YES |  |
| STOPBITS | tinyint | 1 | YES |  |
| HANDSHAKE | tinyint | 1 | YES |  |
| ID_MODEM | tinyint | 1 | YES |  |

## SY_RAS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RAS_KEY | nvarchar | 16 | NO |  |
| RAS_NAME | nvarchar | 510 | YES |  |

## SY_REGISTRY_SERVER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| REGISTRY_KEY | nvarchar | 100 | NO |  |
| REGISTRY_TREE | tinyint | 1 | YES |  |
| REGISTRY_TYPE | tinyint | 1 | YES |  |
| INT_VALUE | int | 4 | YES |  |
| DEFAULT_INT_VALUE | int | 4 | YES |  |
| STR_VALUE | nvarchar | 510 | YES |  |
| DEFAULT_STR_VALUE | nvarchar | 510 | YES |  |
| NOTES | nvarchar | 100 | YES |  |

## SY_REPORT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_RPT | smallint | 2 | NO |  |
| RPT_FILE_NAME | nvarchar | 510 | YES |  |
| DESCRIPTION | nvarchar | 100 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| USED_BY | smallint | 2 | YES |  |
| DATASOURCE | nvarchar | 510 | YES |  |
| ENABLE_ALL | tinyint | 1 | YES |  |
| ENABLE_CURRENT | tinyint | 1 | YES |  |
| ENABLE_LIST | tinyint | 1 | YES |  |
| DEFAULT_ORDER_BY | nvarchar | 510 | YES |  |
| ENABLE_REPORT | tinyint | 1 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## SY_SEARCH_DEF

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SEARCH_INDEX | tinyint | 1 | NO |  |
| SEARCH_ENABLE | tinyint | 1 | YES |  |
| TABLE_NAME | nvarchar | 100 | YES |  |
| COLUMN_NAME1 | nvarchar | 100 | YES |  |
| COLUMN_NAME2 | nvarchar | 100 | YES |  |
| COLUMN_SEARCH | nvarchar | 100 | YES |  |
| SBI_TYPE | tinyint | 1 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## SY_SORT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FORM_NAME | nvarchar | 40 | NO |  |
| SORT_NAME | nvarchar | 60 | NO |  |
| SORT_PROGR | smallint | 2 | NO |  |
| FIELD_NAME | nvarchar | 100 | YES |  |
| SORT_TYPE | nvarchar | 32 | YES |  |

## SY_STORING

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_GROUP | tinyint | 1 | NO |  |
| ID_SQL | tinyint | 1 | NO |  |
| ID_ROW | tinyint | 1 | NO |  |
| TYPE_SQL | tinyint | 1 | YES |  |
| STR_ADVISE | nvarchar | 510 | YES |  |
| STR_SQL | nvarchar | 510 | YES |  |
| ACTIVITY_ID | smallint | 2 | YES |  |

## SY_STORING_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ID_OPERATION | tinyint | 1 | NO |  |
| TABLE_NAME | nvarchar | 100 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| ENABLE_ACTIVITY | tinyint | 1 | YES |  |
| TYPE_BACK | tinyint | 1 | YES |  |
| N_BACK | smallint | 2 | YES |  |
| TYPE_START | tinyint | 1 | YES |  |
| N_START | smallint | 2 | YES |  |
| DAY_WEEK_START | tinyint | 1 | YES |  |
| OCCURRENCE_START | tinyint | 1 | YES |  |
| INSTANT_START | datetime | 8 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## SY_SUMMARY

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SUMMARY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 264 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## SY_SUMMARY_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SUMMARY | nvarchar | 16 | NO |  |
| OBJECT | nvarchar | 16 | NO |  |

## SY_TDBDE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TDBDE_ID | int | 4 | NO |  |
| TDBDE_SUB_ID | int | 4 | NO |  |
| OPERATION_TYPE | tinyint | 1 | YES |  |
| TABLE_NAME | nvarchar | 64 | YES |  |
| KEY_TYPE | tinyint | 1 | YES |  |
| KEY_LONG | int | 4 | YES |  |
| KEY_TEXT | nvarchar | 64 | YES |  |
| KEY_LONG_2 | int | 4 | YES |  |
| KEY_TEXT_2 | nvarchar | 64 | YES |  |
| NODE | nvarchar | 16 | YES |  |
| PRIORITY | tinyint | 1 | YES |  |

## SY_TDBDE_PROG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RECORD_ID | int | 4 | NO |  |
| LAST_TDBDE_ID | int | 4 | YES |  |

## SY_TEMA_COMBO

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| COMBO_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| TABLE_NAME | nvarchar | 510 | YES |  |
| COMBO_TYPE | tinyint | 1 | YES |  |
| SORT_COLUMN | nvarchar | 510 | YES |  |
| VISIBILITY_MODE | tinyint | 1 | YES |  |

## SY_TEMA_COMBO_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| COMBO_ID | smallint | 2 | NO |  |
| COLUMN_NAME | nvarchar | 510 | NO |  |
| VISIBLE | tinyint | 1 | YES |  |
| COL_POSITION | tinyint | 1 | YES |  |
| COL_WIDTH | smallint | 2 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## SY_TEMA_DBGRID

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| DATAGRID_ID | smallint | 2 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| TABLE_NAME | nvarchar | 510 | YES |  |
| SORT_COLUMN | nvarchar | 510 | YES |  |
| ROW_HEADER | tinyint | 1 | YES |  |

## SY_TEMA_DBGRID_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| DATAGRID_ID | smallint | 2 | NO |  |
| COLUMN_NAME | nvarchar | 510 | NO |  |
| VISIBLE | tinyint | 1 | YES |  |
| COL_POSITION | tinyint | 1 | YES |  |
| COL_WIDTH | smallint | 2 | YES |  |
| TYPE_COLUMN | tinyint | 1 | YES |  |
| ID_COMBO | smallint | 2 | YES |  |
| ID_COMBO_KEY | nvarchar | 510 | YES |  |
| ID_COMBO_SHOW | nvarchar | 510 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## SY_TEMA_FILTER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FILTER_ID | smallint | 2 | NO |  |
| FILTER_DESCRIPTION | nvarchar | 70 | YES |  |
| FORM_ID | smallint | 2 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## SY_TEMA_FILTER_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FILTER_ID | smallint | 2 | NO |  |
| FIELD_ORDER | tinyint | 1 | NO |  |
| FIELD_NAME | nvarchar | 510 | YES |  |
| FIELD_TEST | nvarchar | 32 | YES |  |
| FIELD_VALUE | nvarchar | 510 | YES |  |
| FIELD_DYNAMIC | tinyint | 1 | YES |  |
| ENABLE_NOT | nvarchar | 32 | YES |  |
| EXPR_BOOL | nvarchar | 32 | YES |  |
| BRACKET_L | nvarchar | 8 | YES |  |
| BRACKET_R | nvarchar | 8 | YES |  |

## SY_TEMA_TEMPLATE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TEMPLATE_ID | smallint | 2 | NO |  |
| TEMPLATE_DESCRIPTION | nvarchar | 70 | YES |  |
| FORM_ID | smallint | 2 | YES |  |
| IS_DEFAULT | tinyint | 1 | YES |  |
| BY_KIT | tinyint | 1 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## SY_TEMA_TEMPLATE_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TEMPLATE_ID | smallint | 2 | NO |  |
| FIELD_ID | smallint | 2 | NO |  |

## SY_TEMA_TEMPLATE_FILTER

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TEMPLATE_ID | smallint | 2 | NO |  |
| FILTER_ORDER | tinyint | 1 | NO |  |
| FIELD_ID | smallint | 2 | YES |  |
| FIELD_TEST | nvarchar | 32 | YES |  |
| FIELD_VALUE | nvarchar | 510 | YES |  |
| FIELD_DYNAMIC | tinyint | 1 | YES |  |
| ENABLE_NOT | nvarchar | 32 | YES |  |
| EXPR_BOOL | nvarchar | 32 | YES |  |
| BRACKET_L | nvarchar | 8 | YES |  |
| BRACKET_R | nvarchar | 8 | YES |  |

## SY_TEMA_TEMPLATE_SORT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TEMPLATE_ID | smallint | 2 | NO |  |
| SORT_ORDER | tinyint | 1 | NO |  |
| FIELD_ID | smallint | 2 | YES |  |
| SORT_TYPE | tinyint | 1 | YES |  |

## SY_TEMPLATE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FORM_NAME | nvarchar | 40 | NO |  |
| TEMPLATE_NAME | nvarchar | 60 | NO |  |
| FILTER_NAME | nvarchar | 60 | YES |  |
| SORT_NAME | nvarchar | 60 | YES |  |

## SY_THREAT

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| ThreatLevel | tinyint | 1 | NO |  |
| Active | bit | 1 | NO |  |
| EnterFBK | smallint | 2 | NO |  |
| ExitFBK | smallint | 2 | NO |  |

## SY_TemaOperatorLocations

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| StationNumber | smallint | 2 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |

## SY_UI_FIELD_CFG

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FIELD_ID | smallint | 2 | NO |  |
| FORM_ID | int | 4 | YES |  |
| TABLE_NAME | nvarchar | 510 | YES |  |
| FIELD_NAME | nvarchar | 510 | YES |  |
| ID_STRING | nvarchar | 16 | YES |  |
| DESCRIPTION | nvarchar | 510 | YES |  |
| TAB_ID | tinyint | 1 | YES |  |
| GROUP_ID | int | 4 | YES |  |
| GROUP_ROW | tinyint | 1 | YES |  |
| GROUP_COL | tinyint | 1 | YES |  |
| COL_ORDER | smallint | 2 | YES |  |
| FIELD_TYPE | smallint | 2 | YES |  |
| FIELD_UI | smallint | 2 | YES |  |
| COMBO_ID | int | 4 | YES |  |
| MAX_TEXT | smallint | 2 | YES |  |
| MAX_NUMBER | int | 4 | YES |  |
| MIN_NUMBER | int | 4 | YES |  |
| COL_ALIGN | nvarchar | 12 | YES |  |
| COL_WIDTH | int | 4 | YES |  |
| IS_SEARCHABLE | tinyint | 1 | YES |  |
| IS_MANDATORY | tinyint | 1 | YES |  |
| IS_VISIBLE | tinyint | 1 | YES |  |
| IS_MASK | tinyint | 1 | YES |  |
| ENABLE_MULTISITE_SAVE | tinyint | 1 | YES |  |
| ENABLE_SAVEALL | tinyint | 1 | YES |  |

## SY_VISUALIZE_FIELD

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| FORM_NAME | nvarchar | 40 | NO |  |
| TEMPLATE_NAME | nvarchar | 60 | NO |  |
| VISUALIZE_NAME | nvarchar | 100 | NO |  |
| WIDTH_FIELD | int | 4 | YES |  |

## SY_WEB_CFG_PAGE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| WEB_ID | nvarchar | 16 | NO |  |
| NAME_PAGE | nvarchar | 100 | NO |  |
| ID_STRING | nvarchar | 16 | YES |  |
| TAB | tinyint | 1 | NO |  |
| TAB_GROUP | tinyint | 1 | YES |  |
| TAB_ROW | tinyint | 1 | NO |  |
| TAB_COL | tinyint | 1 | NO |  |
| COLSPAN | int | 4 | YES |  |
| VISIBLE_FIELD | tinyint | 1 | YES |  |
| OPTIONAL_FIELD | tinyint | 1 | YES |  |
| CONFIGURABLE | tinyint | 1 | YES |  |
| CFG_OPTIONAL | tinyint | 1 | YES |  |
| LEN_FIELD | smallint | 2 | YES |  |
| FIELD_RIGHT | nvarchar | 16 | YES |  |
| NOTES | nvarchar | 510 | YES |  |

## SY_WS

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| WS_KEY | nvarchar | 16 | NO |  |
| DESCRIPTION | nvarchar | 70 | YES |  |
| EBI_NUMBER | smallint | 2 | YES |  |
| WS_ENABLE | nvarchar | 2 | YES |  |
| WS_EBI | tinyint | 1 | YES |  |
| PROFILE | nvarchar | 32 | YES |  |
| WS_ASSIGNED | tinyint | 1 | YES |  |
| FAILURE_TIMEOUT | int | 4 | YES |  |
| WS_ERASABLE | nvarchar | 2 | YES |  |
| ARRIVAL_ZONE | nvarchar | 16 | YES |  |
| DEPARTURE_ZONE | nvarchar | 16 | YES |  |
| SITE | smallint | 2 | YES |  |
| ENABLE_WEB | tinyint | 1 | YES |  |
| ENABLE_WS_WEB | tinyint | 1 | YES |  |
| ENABLE_TIME | tinyint | 1 | YES |  |
| ENABLE_CUSTOM | tinyint | 1 | YES |  |
| ENABLE_TRANSIT | tinyint | 1 | YES |  |
| NUMBER_PASS | nvarchar | 24 | YES |  |
| NUMBER_PASS_RULE | tinyint | 1 | YES |  |
| ENABLE_PRINT_PASS | tinyint | 1 | YES |  |
| WEB_PRINTER_NAME | nvarchar | 510 | YES |  |
| WEB_PORT_NAME | nvarchar | 510 | YES |  |
| WEB_DRIVER_NAME | nvarchar | 510 | YES |  |
| PATH_RPT | nvarchar | 510 | YES |  |
| ENABLE_EMULATOR | tinyint | 1 | YES |  |
| EMULATOR_INIT | tinyint | 1 | YES |  |
| EMULATOR_END | tinyint | 1 | YES |  |
| EMULATOR_LAYOUT | tinyint | 1 | YES |  |
| EXTERNAL_LOGIN | tinyint | 1 | YES |  |
| ENABLE_EMAIL | tinyint | 1 | YES |  |
| ENABLE_APPOINTMENT | tinyint | 1 | YES |  |
| ENABLE_CAPTURE | tinyint | 1 | YES |  |
| QUERY_TIMEOUT | smallint | 2 | YES |  |
| PHOTO_SOURCE | tinyint | 1 | YES |  |
| PHOTO_TWAIN | nvarchar | 510 | YES |  |
| PHOTO_FORMAT | nvarchar | 6 | YES |  |
| PHOTO_HEIGHT | smallint | 2 | YES |  |
| PHOTO_WIDTH | smallint | 2 | YES |  |
| SIGNATURE_SOURCE | tinyint | 1 | YES |  |
| SIGNATURE_TWAIN | nvarchar | 510 | YES |  |
| SIGNATURE_FORMAT | nvarchar | 6 | YES |  |
| SIGNATURE_HEIGHT | smallint | 2 | YES |  |
| SIGNATURE_WIDTH | smallint | 2 | YES |  |
| DOCUMENT_SOURCE | tinyint | 1 | YES |  |
| DOCUMENT_TWAIN | nvarchar | 510 | YES |  |
| DOCUMENT_FORMAT | nvarchar | 6 | YES |  |
| LANGUAGE_ID | tinyint | 1 | YES |  |
| PATH_SCRIPT | nvarchar | 510 | YES |  |
| PATH_PHOTO | nvarchar | 510 | YES |  |
| PATH_DOCUMENT | nvarchar | 510 | YES |  |
| PATH_SIGNATURE | nvarchar | 510 | YES |  |
| PATH_LAYOUTS | nvarchar | 510 | YES |  |
| WS_SERVER | tinyint | 1 | YES |  |
| IS_ROTARY | tinyint | 1 | YES |  |
| ID_RPT | smallint | 2 | YES |  |
| URL1_LABEL | nvarchar | 510 | YES |  |
| URL1 | nvarchar | 4000 | YES |  |
| URL2_LABEL | nvarchar | 510 | YES |  |
| URL2 | nvarchar | 4000 | YES |  |
| WEB_BUTTON_RESET | tinyint | 1 | YES |  |
| ENABLE_CARD_READER | tinyint | 1 | NO |  |
| ENABLE_QUICK_CHECKOUT | tinyint | 1 | NO |  |
| READER_PRE_KEYSTROKE | nvarchar | 8 | YES |  |
| READER_POST_KEYSTROKE | nvarchar | 8 | YES |  |
| ENABLE_BARCODE_SCANNER | tinyint | 1 | NO |  |
| ENABLE_DOCUMENT_SCANNER | tinyint | 1 | NO |  |
| LAYOUT_ID | tinyint | 1 | NO |  |
| SCANNER_REGION | nvarchar | 510 | YES |  |
| SCANNER_COUNTRY | nvarchar | 510 | YES |  |
| SCANNER_STATE | nvarchar | 510 | YES |  |
| LocationTagName | nvarchar | 80 | NO |  |

## SY_WS_MESSAGE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| WS_KEY | nvarchar | 16 | NO |  |
| ROW_ID | smallint | 2 | NO |  |
| TEXT_ROW | nvarchar | 4000 | YES |  |

## SY_WS_ZONE

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| WS_KEY | nvarchar | 16 | NO |  |
| ZONE_KEY | nvarchar | 16 | NO |  |

## Sbi

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiId | int | 4 | NO |  |
| SbiType | smallint | 2 | NO |  |
| RSITemplate | varchar | 40 | YES |  |
| RSIIsSpecial | bit | 1 | NO |  |
| RSILastEnrolled | datetime | 8 | NO |  |
| RSIOverrideDefaultThreshold | bit | 1 | NO |  |
| RSIRejectThreshold | smallint | 2 | NO |  |
| RSIAuthorityLevel | smallint | 2 | NO |  |
| RSITemplateLastEvolved | datetime | 8 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## SbiSite

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| Site | smallint | 2 | NO |  |
| SbiType | tinyint | 1 | NO |  |
| BehaviorID1 | smallint | 2 | YES |  |
| BehaviorID2 | smallint | 2 | YES |  |
| BehaviorID3 | smallint | 2 | YES |  |
| BehaviorID4 | smallint | 2 | YES |  |
| AltBehaviorID | smallint | 2 | YES |  |
| AltStartValidity | datetime | 8 | YES |  |
| AltEndValidity | datetime | 8 | YES |  |
| rowguid | uniqueidentifier | 16 | YES |  |

## SbiSiteAltBehavior

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| Server | smallint | 2 | NO |  |
| Site | smallint | 2 | NO |  |
| Behavior | smallint | 2 | NO |  |
| StartValidity | datetime | 8 | NO |  |
| EndValidity | datetime | 8 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## SbiSiteBehavior

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| Server | smallint | 2 | NO |  |
| Site | smallint | 2 | NO |  |
| Behavior | smallint | 2 | NO |  |
| CommencementDateTime | datetime | 8 | NO |  |
| ExpiryDateTime | datetime | 8 | NO |  |
| IsDisabled | bit | 1 | NO |  |
| StateID | tinyint | 1 | NO |  |
| Comment | nvarchar | -1 | NO |  |
| Imported | bit | 1 | NO |  |
| Position | smallint | 2 | NO |  |
| IS_TS_BM | bit | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## StringProperties

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| StringID | int | 4 | NO |  |
| Description | nvarchar | 2000 | NO |  |
| DefaultValue | nvarchar | 4000 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## Strings

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| StringID | int | 4 | NO |  |
| LocaleID | nvarchar | 100 | NO |  |
| Value | nvarchar | 4000 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## SystemConfiguration

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PropertyName | nvarchar | 510 | NO |  |
| PropertyValue | nvarchar | 510 | YES |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## TabProperties

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| PageID | int | 4 | NO |  |
| TabID | int | 4 | NO |  |
| StringID | int | 4 | NO |  |
| CustomProperties | xml | -1 | NO |  |
| Options | xml | -1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## TableProperties

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| TableName | nvarchar | 100 | NO |  |
| DSA | bit | 1 | NO |  |
| Migrate | bit | 1 | NO |  |
| PrimaryKey | nvarchar | 200 | YES |  |
| EnterpriseModelDefault | smallint | 2 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## TaskLinks

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| Descriptor | nvarchar | 800 | NO |  |
| IsEnabled | bit | 1 | NO |  |
| IsVisible | bit | 1 | NO |  |
| LinkIcon | nvarchar | 100 | NO |  |
| PageID | int | 4 | YES |  |
| StringID | int | 4 | NO |  |
| URL | nvarchar | 8000 | NO |  |
| Role | nvarchar | 16 | YES |  |
| Options | xml | -1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## Template

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| Name | nvarchar | 100 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |

## TimePeriodDetails

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| RecordNumber | smallint | 2 | NO |  |
| ServerID | smallint | 2 | NO |  |
| Segment | tinyint | 1 | NO |  |
| ValidDays | tinyint | 1 | NO |  |
| StartHour | tinyint | 1 | NO |  |
| StartMin | tinyint | 1 | NO |  |
| StopHour | tinyint | 1 | NO |  |
| StopMin | tinyint | 1 | NO |  |

## Vehicle

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| AlarmInstructPage | nvarchar | 60 | NO |  |
| AlarmPriority | smallint | 2 | NO |  |
| AlarmSubPriority | smallint | 2 | NO |  |
| AssociatedPage | nvarchar | 60 | NO |  |
| CardTrace | bit | 1 | NO |  |
| CHImage | nvarchar | 200 | NO |  |
| CommencementDateTime | datetime | 8 | NO |  |
| DefBackCardLayout | nvarchar | 510 | NO |  |
| DefFrontCardLayout | nvarchar | 510 | NO |  |
| ExpiryDateTime | datetime | 8 | NO |  |
| ExternalCompanyID | int | 4 | NO |  |
| ExternalKey | nvarchar | 510 | NO |  |
| ExternalSource | tinyint | 1 | NO |  |
| Identifier | nvarchar | 100 | NO |  |
| Kind | nvarchar | 40 | NO |  |
| LastModifBy | nvarchar | 100 | NO |  |
| LastModifDateTime | datetime | 8 | NO |  |
| LastModifOnServer | smallint | 2 | NO |  |
| NumberPlate | nvarchar | 40 | NO |  |
| LocationTagName | nvarchar | 80 | NO |  |
| Parameter1 | nvarchar | 200 | NO |  |
| Parameter2 | nvarchar | 200 | NO |  |
| Parameter3 | nvarchar | 200 | NO |  |
| Parameter4 | nvarchar | 200 | NO |  |
| Parameter5 | nvarchar | 200 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| ServerCreatedOn | smallint | 2 | NO |  |
| SoonToExpire | bit | 1 | NO |  |
| SoonToExpireCards | bit | 1 | NO |  |
| StateID | smallint | 2 | NO |  |
| Trademark | nvarchar | 40 | NO |  |
| Trailer | bit | 1 | NO |  |
| Utilization | nvarchar | 40 | NO |  |
| VehicleType | tinyint | 1 | NO |  |

## VehicleUserFields

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| SbiID | int | 4 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| UF1 | nvarchar | 200 | NO |  |
| UF2 | smallint | 2 | NO |  |
| UF3 | bit | 1 | NO |  |
| UF4 | bit | 1 | NO |  |
| UF5 | bit | 1 | NO |  |
| UF6 | bit | 1 | NO |  |
| UF7 | bit | 1 | NO |  |
| UF8 | bit | 1 | NO |  |
| UF9 | smallint | 2 | NO |  |
| UF10 | nvarchar | 200 | NO |  |
| UF11 | datetime | 8 | NO |  |
| UF12 | datetime | 8 | NO |  |
| UF13 | datetime | 8 | NO |  |
| UF14 | nvarchar | 200 | NO |  |
| UF46 | nvarchar | 200 | NO |  |
| UF47 | nvarchar | 200 | NO |  |
| UF48 | nvarchar | 200 | NO |  |
| UF49 | nvarchar | 200 | NO |  |
| UF50 | nvarchar | 200 | NO |  |
| UF51 | nvarchar | 200 | NO |  |
| UF52 | nvarchar | 200 | NO |  |
| UF53 | nvarchar | 200 | NO |  |
| UF54 | nvarchar | 200 | NO |  |
| UF55 | nvarchar | 200 | NO |  |
| UF56 | nvarchar | 200 | NO |  |
| UF58 | nvarchar | 200 | NO |  |
| UF57 | nvarchar | 200 | NO |  |
| UF59 | nvarchar | 200 | NO |  |
| UF60 | nvarchar | 200 | NO |  |
| UF61 | nvarchar | 200 | NO |  |
| UF62 | nvarchar | 200 | NO |  |
| UF63 | nvarchar | 200 | NO |  |
| UF64 | nvarchar | 200 | NO |  |
| UF65 | nvarchar | 200 | NO |  |
| UF66 | nvarchar | 200 | NO |  |
| UF68 | nvarchar | 200 | NO |  |
| UF67 | nvarchar | 200 | NO |  |
| UF69 | nvarchar | 200 | NO |  |
| UF70 | nvarchar | 200 | NO |  |
| UF71 | nvarchar | 200 | NO |  |
| UF72 | nvarchar | 200 | NO |  |
| UF73 | nvarchar | 200 | NO |  |
| UF74 | nvarchar | 200 | NO |  |
| UF75 | nvarchar | 200 | NO |  |
| UF76 | nvarchar | 200 | NO |  |
| UF77 | nvarchar | 200 | NO |  |
| UF78 | nvarchar | 200 | NO |  |
| UF79 | nvarchar | 200 | NO |  |
| UF80 | nvarchar | 200 | NO |  |
| UF81 | nvarchar | 200 | NO |  |
| UF82 | nvarchar | 200 | NO |  |
| UF83 | nvarchar | 200 | NO |  |
| UF84 | nvarchar | 200 | NO |  |
| UF85 | nvarchar | 200 | NO |  |
| UF86 | nvarchar | 200 | NO |  |
| UF87 | nvarchar | 200 | NO |  |
| UF88 | nvarchar | 200 | NO |  |
| UF89 | nvarchar | 200 | NO |  |
| UF90 | nvarchar | 200 | NO |  |

## Visitor

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| LocationTagName | nvarchar | 80 | NO |  |
| SbiID | int | 4 | NO |  |
| Surname | nvarchar | 100 | NO |  |
| Name | nvarchar | 100 | NO |  |
| AlarmInstructPage | nvarchar | 60 | NO |  |
| AlarmPriority | smallint | 2 | NO |  |
| AlarmSubPriority | smallint | 2 | NO |  |
| AssociatedPage | nvarchar | 60 | NO |  |
| BirthCountry | nvarchar | 16 | NO |  |
| BirthDate | datetime | 8 | NO |  |
| BirthPlace | nvarchar | 40 | NO |  |
| CardTrace | bit | 1 | NO |  |
| CHDocument1 | nvarchar | 200 | NO |  |
| CHDocument2 | nvarchar | 200 | NO |  |
| CHDocument3 | nvarchar | 200 | NO |  |
| CHDocument4 | nvarchar | 200 | NO |  |
| CHImage | nvarchar | 200 | NO |  |
| Date1 | datetime | 8 | NO |  |
| Date2 | datetime | 8 | NO |  |
| Date3 | datetime | 8 | NO |  |
| Date4 | datetime | 8 | NO |  |
| Date5 | datetime | 8 | NO |  |
| Document1 | nvarchar | 40 | NO |  |
| Document2 | nvarchar | 40 | NO |  |
| Document3 | nvarchar | 40 | NO |  |
| Document4 | nvarchar | 40 | NO |  |
| EMail | nvarchar | 510 | NO |  |
| Flag1 | bit | 1 | NO |  |
| Flag2 | bit | 1 | NO |  |
| Flag3 | bit | 1 | NO |  |
| Flag4 | bit | 1 | NO |  |
| Flag5 | bit | 1 | NO |  |
| LastModifBy | nvarchar | 100 | NO |  |
| LastModifDateTime | datetime | 8 | NO |  |
| LastModifOnServer | smallint | 2 | NO |  |
| Parameter1 | nvarchar | 200 | NO |  |
| Parameter2 | nvarchar | 200 | NO |  |
| Parameter3 | nvarchar | 200 | NO |  |
| Parameter4 | nvarchar | 200 | NO |  |
| Parameter5 | nvarchar | 200 | NO |  |
| ResidenceAddress | nvarchar | 510 | NO |  |
| ResidenceCountry | nvarchar | 16 | NO |  |
| ResidencePlace | nvarchar | 40 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| Site | smallint | 2 | NO |  |
| Society | nvarchar | 40 | NO |  |
| ServerCreatedOn | smallint | 2 | NO |  |
| Telephone | nvarchar | 40 | NO |  |
| Last_Check_In | datetime | 8 | YES |  |
| Last_Check_Out | datetime | 8 | YES |  |
| Last_Pre_Reg | datetime | 8 | YES |  |
| Last_RM_Operation | datetime | 8 | YES |  |
| Pre_Registered | smallint | 2 | NO |  |

## hsc_tb_CardSite

| Column | Type | MaxLen | Nullable | Description |
| --- | --- | --- | --- | --- |
| AllowedTransit | tinyint | 1 | NO |  |
| ApbDisable | bit | 1 | NO |  |
| CanBe2Transit | bit | 1 | NO |  |
| CardID | int | 4 | NO |  |
| CardNumberEnable | bit | 1 | NO |  |
| CommencementDateTime | datetime | 8 | YES |  |
| Enable2Transit | bit | 1 | NO |  |
| ExpiryDateTime | datetime | 8 | YES |  |
| PathDisable | bit | 1 | YES |  |
| PINDisable | bit | 1 | NO |  |
| rowguid | uniqueidentifier | 16 | NO |  |
| Site | smallint | 2 | NO |  |
| ThreatLevelDisable | bit | 1 | NO |  |
| TimePresenceDisable | bit | 1 | NO |  |
| UserPresenceDisable | bit | 1 | NO |  |
| VisitationDisable | bit | 1 | NO |  |


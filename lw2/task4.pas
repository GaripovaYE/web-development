PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;
VAR
  QueryString: STRING;

FUNCTION GetAtributeName(QStr: STRING): STRING;
VAR
  TempStr: STRING;
BEGIN {GetAtributeName}
  TempStr := '';
  IF POS('=', QStr) <> 0
  THEN
    TempStr := COPY(QStr, 1, POS('=', QStr) - 1);
  GetAtributeName := TempStr
END;  {GetAtributeName}

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  AtribValue, TempQueryString: STRING;
  I, J: BYTE;
BEGIN
  TempQueryString := QueryString;
  AtribValue := '';
  IF POS(Key, TempQueryString) <> 0
  THEN
    BEGIN
      I := POS(Key, TempQueryString);
      WHILE (I < LENGTH(TempQueryString)) AND (TempQueryString[I] <> '=')
      DO
        I := I + 1;
      DELETE(TempQueryString, 1, I);
      I := 1;
      WHILE (I < LENGTH(TempQueryString)) AND (TempQueryString[I] <> '&')
      DO
        I := I + 1;
      IF (TempQueryString[I] = '&')
      THEN
        I := I - 1;
      AtribValue := COPY(TempQueryString, 1, I)
    END;
  GetQueryStringParameter := AtribValue
END;

BEGIN  {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}

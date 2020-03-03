PROGRAM PersonHelo(INPUT, OUTPUT);
USES
  DOS;
CONST
  Name = 'NAME';
VAR
  QueryString, PersonName: STRING;
  I: BYTE;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  PersonName := '';
  IF POS(Name, QueryString) <> 0
  THEN
    IF (POS('=', QueryString) <> 0) AND (POS('=', QueryString) > POS(Name, QueryString))
    THEN
      BEGIN
        DELETE(QueryString, 1, POS('=', QueryString));
        PersonName := QueryString
      END;
  IF PersonName <> ''
  THEN
    WRITELN('Hello dear, ' + PersonName + '!')
  ELSE
    WRITELN('Hello Anonymous')
END.

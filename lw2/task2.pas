PROGRAM PaulRevere(INPUT, OUTPUT);
USES
  DOS;
{Печать соответствующего сообщения ,зависящего от величины
 на входе:  '...by land'  для 1;  '...by sea'  для 2; '... by air' для 3;
 иначе печать сообщения об ошибке}
{Для запуска http://127.0.0.1:4001/cgi-bin/SarahRever.CGI?NAME=2}
CONST
  Space = '%20';
VAR
  QueryString, Keyword, Lanterns: STRING;

BEGIN {PaulRevere}
  {Read Lanterns}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  Lanterns := '';
  IF (QueryString <> '') AND (POS('lanterns', QueryString) <> 0)
  THEN
    BEGIN
      DELETE(QueryString, 1, POS('=', QueryString));
      WHILE POS(Space, QueryString) <> 0
      DO
        DELETE(QueryString, POS(Space, QueryString), 3);
      Lanterns := QueryString;
      {Issue Paul Revere's message}
      IF LENGTH(Lanterns) = 1
      THEN
        IF Lanterns = '1'
        THEN
          WRITELN('The British are coming by land.')
        ELSE
          IF Lanterns = '2'
          THEN
            WRITELN('The British are coming by sea.')
          ELSE
            IF Lanterns = '3'
            THEN
              WRITELN('The British are coming by air.')
            ELSE
	            WRITELN('The North Church shows only ''', Lanterns, '''.')
    END;
  IF LENGTH(Lanterns) <> 1
  THEN
    WRITELN('Lanterns not found')
END. {PaulRevere}

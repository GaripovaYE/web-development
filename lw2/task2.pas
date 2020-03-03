PROGRAM PaulRevere(INPUT, OUTPUT);
USES
  DOS;
{����� ᮮ⢥�����饣� ᮮ�饭�� ,������饣� �� ����稭�
 �� �室�:  '...by land'  ��� 1;  '...by sea'  ��� 2; '... by air' ��� 3;
 ���� ����� ᮮ�饭�� �� �訡��}
{��� ����᪠ http://127.0.0.1:4001/cgi-bin/SarahRever.CGI?NAME=2}
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

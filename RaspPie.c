const int BUZZER=3;
const int GSR=A2; 							//это входной порт с которого поступает инфа
int threshold=0; 							//изначально порог ноль
int sensorValue;							//контейнер для переменной, в который можно добавить значения (!)
void setup(){								//запуск цикла
	long sum=0;								//sum изначально равна нолю
	Serial.begin(9600);						// Задает скорость передачи данных с компом (9600 бит/сек)
	pinMode(BUZZER,OUTPUT);					// многа букв - "http://arduino.ru/Tutorial/DigitalPins" но походу это отключает базер
	digitalWrite(BUZZER,LOW);				//Отключает резистор баззера, кажись
	delay(1000);							//подождём 1000 ms

	for(int i=0;i<500;i++) { 				// Цикл с условием, будет продолжаться, пока i не достигнет 500
		sensorValue=analogRead(GSR);		//считывает значение с сенсора, GSR - переменная объявленная в 2 строке. и записывает значение в sensorValue
		sum += sensorValue;					//добавляет переменной sum значение полученное из sensorValue
		delay(5);							// 5 ms
	}										// конец цикла

	threshold = sum/500;					//порог = ((sensorValue)^5)/500
	Serial.print("threshold =");			// выводит значение порога
	Serial.println(threshold); 				// хз ваще че это http://arduino.ru/Reference/Serial/Println
} 
void loop(){ 								//Второй цикл
	int temp;								// См строку 4
	sensorValue=analogRead(GSR);
	Serial.print("sensorValue=");
	Serial.println(sensorValue);
	temp = threshold - sensorValue;			// Что бы вычислить температуру, вычисляем типа порог срабатывания(хз точно что это за параметр) из значения сенсора
	if(abs(temp)>50) { 						//Возвращает модуль числа, хранящегося в переменной Temp и если он будет больше 50 =>
		sensorValue=analogRead(GSR);		// то проводится пересчет походу)(типа проверка)
		temp = threshold - sensorValue;
		if(abs(temp)>50){ 					// снова проверка условия, и если модуль числа temp таки больше 50 выводится какая то ебанутая инфа.
			digitalWrite(BUZZER,HIGH);
			Serial.println("YES!");
			delay(3000);
			digitalWrite(BUZZER,LOW);
			delay(1000); 
} } }

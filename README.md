# randomFSAPI

명언을 랜덤으로 출력하는 api를 제작함


* https://github.com/golbin/hubot-maxim 에 있는 data.json의 명언들중 하나를 무작위로 선택하여 출력함

GET 

* "/"  : 쿼리 조건문을 생성하여 명언 내용(message), 작성자(author)를 작성하여 보내면 그에 맞는 내용을 보유한 데이터를 보여줌

* "/random" : Math.floor 와 Math.random을 사용하여 나온 수를 data리스트의 인덱스값으로 지정하여 해당 데이터를 출력한다.

* "/:id" : 원하는 데이터의 인덱스 값을 작성하여 보내주면 data리스트의 `id`인덱스에 해당하는 데이터를 출력함


POST

명언내용(message) 와 작성자(author)를 작성하여 보내주면 데이터에 등록됨


DELETE

data리스트의 인덱스값중 하나를 작성하여 보내주면 해당 인덱스 값에 위치한 데이터를 제거함

PUT 

data리스트의 인덱스 값중 하나를 작성하고, 수정하고자 하는 내용을 작성하여 보내주면 해당 인덱스에 있는 데이터가 수정됨

# Frontend - <a href="https://github.com/goodminjeong/AI-5_A4_DUTO_Backend">Backend 바로가기!</a>
# Django-rest-framework-Project-Two Rabbits
DRF를 이용한 커뮤니티 사이트

## 🖥️ 프로젝트 소개 - <a href="https://www.notion.so/woongpang/S-A-5e8bad4c4aa648e7b6ff860e47a08718">S.A. 바로가기!</a>
개발 공부 자료도 얻고 휴식을 위한 미디어 컨텐츠(왓챠피디아 참조)를 추천받는 개발자 연습생을 위한 커뮤니티 사이트
<br>
이름하여 <두 마리 토끼>입니다!

## 🕰️ 개발 기간
* 23.05.08 - 23.05.14

### 🧑‍🤝‍🧑 팀원 구성 및 역할 분담
- 팀장😄  : <a href="https://mdhtora.tistory.com/">마동휘</a> - 회원가입, 프로필 조회, 수정
- 팀원😄1 : <a href="https://hanilcome.tistory.com/">윤보영</a> - 로그인, 팔로우 기능, 내가 쓴 글 조회, 좋아요 게시글 조회
- 팀원😄2 : <a href="https://guco.tistory.com/">구민정</a> - 메인페이지 게시글 리스트 조회, 팔로잉 게시글 리스트 조회, 카테고리별 게시글 리스트 조회, 별점 기능
- 팀원😄3 : <a href="http://allitail.tistory.com/">원윤희</a> - 게시글 등록, 조회, 수정, 삭제, 좋아요
- 팀원😄4 : <a href="https://woongpang.tistory.com/">이기웅</a> - 댓글 등록, 조회, 수정, 삭제

### 🔑 프로젝트 설치 및 실행 방법
#### 깃허브 클론하기
```
$ git init
$ git clone git@github.com:goodminjeong/AI-5_A4_DUTO_Backend.git
```
#### 패키지 밎 라이브러리 설치
```
$ pip install -r requirements.txt
```
#### DB 연동
```
$ python manage.py makemigrations
$ python manage.py migrate
```
#### 카테고리 초기 데이터 설정
```
$ python manage.py loaddata category_data
```
#### 백엔드 서버 실행
```
$ python manage.py runserver
```
#### 프론트엔드 라이브서버 실행
- vscode 확장팩 <Live Server> 설치
- index.html에서 마우스 우클릭 후 Open with Live Server 클릭(단축키 Alt+L+O)

## 📌 주요 기능
### 목차
#### [1. 회원가입](#회원가입)
#### [2. 로그인](#로그인)
#### [3. 회원탈퇴](#회원탈퇴)
#### [4. 마이 페이지](#마이-페이지)
#### [5. 내가 쓴 게시글](#내가-쓴-게시글)
#### [6. 좋아요 한 게시글 보기](#좋아요-한-게시글-보기)
#### [7. 메인 페이지](#메인-페이지)
#### [8. 카테고리](#카테고리)
#### [9. 게시글 작성](#게시글-작성)
#### [10. 상세 페이지](#상세-페이지)
#### [11. 댓글 작성](#댓글-작성)
#### [12. 팔로우 기능](#팔로우-기능)
#### [13. 좋아요 기능](#좋아요-기능)
------------
#### 회원가입 
- 주소 API 연동
- ID , Email 중복방지
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/33ea524f-2d44-4077-921b-a72d59ff7118)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/19faa41c-e6d1-4fa6-aaf6-e9de3cd2e8a0)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/cf5ca04f-6109-4eb0-823e-232d79062c86)
  
#### 로그인 
- DB값 검증
- 로그인 시 JWT Token 생성
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/a685bfe5-7313-4cea-96af-2246102216e1)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/b4405887-c4d1-4f32-b9db-176ce6114805)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/6dd5a208-d3e3-4d90-b3ca-e7345741adbc)

#### 회원탈퇴
- 데이터베이스에서 완전소멸이 아닌 유저의 "is_active = False" 로 변환함
- 백엔드에만 구현되어 있음
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/7c9a2086-5705-4e8a-a6bc-59a8820ee75f)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/e4f298ed-404d-4999-bf41-e8d11fb6b5de)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/caf9fb07-70ce-43ce-a65d-e91620c1c00d)  

#### 마이 페이지
- 프로필 정보 수정
- 좋아요한 게시글 보기, 내가 쓴 게시글 보기
- 사용자 본인의 프로필만 수정 버튼이 보임
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/22bcd2ec-178c-4198-a8b8-c50836f108fd)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/61d72b6e-34b5-4f55-802f-86c9dd30c02b)
  
#### 내가 쓴 게시글
- 프로필 페이지에서 본인이 작성한 글만 보이게 하는 기능 

#### 좋아요 한 게시글 보기
- 프로필 페이지에서 본인이 좋아요한 글만 보이게 하는 기능  

#### 메인 페이지
- 전체 게시글 조회
- 최근 12개의 게시글이 최신순으로 정렬되어 있음
- 남긴 별점이 보임
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/2b22bce8-fd4e-427d-9465-76528e2ba535)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/8fd286ab-cee4-4570-8f72-ce45d48bfbfc)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/b36a4ed0-dd68-4e53-b1fd-6fb182d482c6)

#### 카테고리
- 공부, 휴식 두 카테고리로 글을 나눌 수 있음(카테고리별 게시글 조회)
- 카테고리별 팔로잉 게시글 조회
- 해당 카테고리에서 글쓰기 버튼을 누르면 자동으로 카테고리가 설정됨
- 자신이 팔로잉한 사람들이 쓴 게시글들을 모아볼 수 있음
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/cc9cfe26-eae9-4d75-a302-ab32495c7f02)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/f114b470-3239-453c-94f4-98f4c975c666)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/2ef90439-81fb-4e6c-bb28-85918828d5df)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/880a4b09-40f9-4968-9644-bee3741fe547)

#### 게시글 작성
- 별점 추가, 이미지 첨부
- 제목, 내용, 별점 필수, 이미지 선택 가능
- 수정하지 않은 내용은 그대로 다시 DB에 저장됨
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/7916d366-1d1e-4944-b6c8-04b2bec6f95b)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/14d49148-c92a-4787-933c-58b853a9c72c)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/80ff0d90-d799-48d7-a86e-b657e5ee474f)
- 게시글 수정 시 원래 내용 불러오는 기능
- 본인이 쓴 게시글만 수정, 삭제 가능
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/fede895f-1f6e-4911-b893-d94bb8350fa1)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/4cb1563a-1e48-4588-acb4-1ba71fa3af6a)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/7c9734a5-c6bd-4eb7-853c-22e719bf0a39)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/9024d08c-504d-42bd-8c81-38a0d28bc0ad)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/2d19b771-6b1e-41c3-9a48-535c3a069fd1)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/769ca56f-0dcb-415f-a6dc-df0131b3311b)

#### 상세 페이지
- 게시글 수정, 삭제
- 좋아요 기능
- 팔로우 기능
- 카테고리 별 페이지
- 타인이 작성한 게시글에는 수정, 삭제 버튼 안 보임
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/f73d2fc2-cd18-4be4-a212-9549e0b2966c)

#### 댓글 작성
- 댓글 작성
- 작성자만 본인 댓글을 수정, 삭제 가능
- 작성자에게만 본인 댓글관련 수정, 삭제 버튼이 보여짐
- 댓글 수정 시 기존 내용을 한번 더 확인시켜줌
- 댓글 수정 시 변경된 값이 없을 경우 백엔드로 요청 하지않음
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/30791661-acb1-4e03-b30c-a5a7773687ed)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/bc6d7abe-8a5c-4bc0-8819-a510972aab87)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/5f963d25-8c4d-49c8-a535-e6ba7514a1b3)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/478ec6b8-9148-4046-a43c-4430c0fd51f9)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/872fd000-4e71-4e2b-aeb5-e2145836a139)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/7fe2b32c-0651-4694-98a5-e6a62d847f12)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/3ed98d2e-e280-4ad2-9933-0835a380cb16)

#### 팔로우 기능
- 상세페이지를 들어갔을때 작성자가 본인이면 팔로우 버튼 x, 다른 사람일 경우 팔로우 버튼이 생김
- 해당 유저를 팔로잉 중이면 unfollow, 팔로잉 하고 있지 않으면 follow 버튼으로 보임
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/91753905-2a33-461d-8269-3d3aa7ea8d38)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/af29338b-20dd-491f-936c-0dde27db88dc)  
  
#### 좋아요 기능
- 상세페이지를 들어갔을때 로그인한 유저가 좋아요를 이미 누른 게시글이면 빨간 하트로 보이고 안 누른 상태면 빈 하트로 보임
- 좋아요 클릭 시 새로고침 하지 않아도 바로 하트 색깔과 좋아요 개수가 바뀜
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/42915548-0d83-4687-87ec-318426a4b2c1)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/85abb5d2-bc17-40c6-b80b-aa5ca8d487e3)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/a67c87cb-d013-4963-ad48-f2958b2c9790)
![image](https://github.com/goodminjeong/AI-5_Todo-list/assets/125722304/8914c30a-c2da-41fc-b2b6-e212925988be)

# Quickchive-frontend

## 🙌 프로젝트 개요
- 읽어둬야 할 아티클 링크, 참석해야 하는 세미나 링크, 봐둬야 할 영상링크 등 자기개발을 위해 읽어두고 알아야 할 링크를 분류해서 저장할 수 있는 북마크 웹사이트입니다.

<br/>

## 👩‍👩‍👧‍👦 서비스 대상
- 여러가지 이유로 여러 곳에서 다시 볼 목적으로 콘텐츠를 수집하는 사람들

<br/>

## ❓ 기획 배경 
### 읽어야 할 자료를 여기저기 쌓아두고 있진 않으신가요?

매일 읽고 알아둬야 할 아티클과 세미나, 영상이 넘치는 세상! IT업계분들이라면 더욱 공감하실 거예요. 커리어리, 브런치, 요즘IT, 팁스터 등 여기저기서 올라오는 읽을거리를 관리하는 것도 머리가 아파요. 

### 시중의 북마크 서비스는

- 느리고 무겁거나(Notion)
- 이미지와 링크를 한번에 볼 수 없거나(Pocket)
- PC, 모바일 둘 다 사용할 수 없습니다.
- 자기개발목적보단 자주가는 사이트를 저장하는 기능이 주가 됩니다.(Toby)

### 저걸 다 해결해주는 북마크 서비스면 어떨까요?

- 하나의 주제로 링크를 모을 수 있는 기능이 있고
- 읽을 기한을 설정하거나, 문서요약을 제공해주고
- PC/모바일 똑같은 방식으로 북마크하고, 언제 어디서나 확인할 수 있다면 메리트있지 않을까요?

<br/>
<hr/>
<br/>

## 🛠 기능 

> MVP

1. User

- 로그인: OAuth(구글로그인, 카카오로그인), 이메일 로그인(자체 로그인 기능)
- 자동로그인 정책: 한달 동안 접속하지 않아도 로그인 유지 - refresh token 활용(만료 기간 한달)
- 회원가입(이메일 인증방식)
  - 회원가입 시 받는 정보: 이메일(메일로 인증필수), 닉네임, 비밀번호(8자 이상 문자, 숫자)
- 닉네임 수정
- 비밀번호 재설정
- 로그아웃
- 회원 탈퇴

2. Content

- 저장: 콘텐츠 이름, \*URL, 메모, 카테고리, 즐겨찾기, 읽을 기한
- 삭제
- 수정: 콘텐츠 이름, 메모, 카테고리, 즐겨찾기, 읽을 기한

3. Collection

- 저장: \*콜렉션 이름, 콜렉션 설명, URL, 카테고리, 즐겨찾기
- 삭제
- 수정: 콘텐츠 이름, URL(추가, 삭제, 순서 변경), 카테고리, 읽을 기한

4. 알림

- 읽을 기한 알림: 매일 08:00 KST에 읽을 기한 만료된 콘텐츠에 대한 메일 알림 전송

<br>   

   

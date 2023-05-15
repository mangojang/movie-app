# movie-app

---

[OMDb API](https://www.omdbapi.com/)를 사용하여 만든 영화 검색 애플리케이션 입니다. 

영화 검색 목록 페이지(index), 영화 검색 세부 사항 페이지,  프로필 페이지로 구성 되어있으며,  SPA(Single Page Application) 형태로 제작 되었습니다.

Vanila javascript , Typescript 2가지 버전으로 제작 하였고,  각 버전의 코드는 

`vanila`, `typescript` branch를 통해 확인 할 수 있습니다. 

(기본 main branch는 typescript 버전 입니다. ) 

** 본 사이트는 상업적인 목적이 없습니다. 

![movie-app-main.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d9534639-d9b5-4349-a9b1-3fa6dcac68ed/movie-app-main.jpg)

## 배포 주소

---

> [https://movie-app-mangojang.vercel.app/](https://movie-app-mangojang.vercel.app/#/)
> 

## 시작 가이드

---

### Requirements

- Node v16 이상

### Installation

```bash
git clone [https://github.com/mangojang/movie-app.git](https://github.com/mangojang/movie-app.git)
```

### Start

```bash
npm install
npm run dev
```

### build

```bash
npm run build
```

## 기술 스택

---

- Javascript
- Typescript
- SCSS
- Parcel
- Vercel

## 주요 기능

---

 주요 기능은 다음과 같습니다

- 영화 검색
    - 영화 검색 시, OMDbAPI 검색 값 호출 후, 목록 보여주기
    
    ![movie-app-search1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aad174c4-8096-4bcd-af62-aca69203b55d/movie-app-search1.png)
    
    ![movie-app-search2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87964e4a-b2b1-4b24-9ddb-746a6a3a3b33/movie-app-search2.png)
    
- 영화 목록 더보기
    - 더보기 버튼 클릭 시,  OMDbAPI 호출을 기반으로 10개 목록 추가
    
    ![movie-app-more1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e307a1a-75d8-4e15-a03a-26071031117d/movie-app-more1.png)
    
    ![movie-app-more2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da1065fa-bec8-4ca6-a860-5436c9129ddd/movie-app-more2.png)
    
- 영화 세부 페이지
    - OMDbAPI 를 통해 영화 정보를 받아와 페이지 보여주기
    - 영화 정보가 보여지기 전 까지 스켈레톤 UI 적용
    
    ![movie-app-movie1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af466d08-2bfe-4691-9d09-27d565a113be/movie-app-movie1.png)
    
    ![movie-app-movie2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8316d57b-1876-49ba-826a-52637a777809/movie-app-movie2.png)
    

## Contact

---

mangojang :  mangojang994@gmail.com

## License

---

MIT License

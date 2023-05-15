# movie-app

---

[OMDb API](https://www.omdbapi.com/)를 사용하여 만든 영화 검색 애플리케이션 입니다. 

영화 검색 목록 페이지(index), 영화 검색 세부 사항 페이지,  프로필 페이지로 구성 되어있으며,  SPA(Single Page Application) 형태로 제작 되었습니다.

Vanila javascript , Typescript 2가지 버전으로 제작 하였고,  각 버전의 코드는 

`vanila`, `typescript` branch를 통해 확인 할 수 있습니다. 

(기본 main branch는 typescript 버전 입니다. ) 

** 본 사이트는 상업적인 목적이 없습니다. 

![movie-app-main](https://github.com/mangojang/movie-app/assets/42363123/ce5c0581-2231-495e-b016-5794cdb0db3e)

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
    
    ![movie-app-search1](https://github.com/mangojang/movie-app/assets/42363123/bdbaf419-6671-4c0d-bcfd-bf029e2e666f)
    
    ![movie-app-search2](https://github.com/mangojang/movie-app/assets/42363123/573ea88b-0597-4650-83c4-e98b3569ee02)
    
- 영화 목록 더보기
    - 더보기 버튼 클릭 시,  OMDbAPI 호출을 기반으로 10개 목록 추가
    
    ![movie-app-more1](https://github.com/mangojang/movie-app/assets/42363123/45739f49-4ecc-4e8e-8bb3-fbd4314675a5)
    
    ![movie-app-more2](https://github.com/mangojang/movie-app/assets/42363123/cde8d7e7-2f6f-450c-a17f-cefe231325ea)
    
- 영화 세부 페이지
    - OMDbAPI 를 통해 영화 정보를 받아와 페이지 보여주기
    - 영화 정보가 보여지기 전 까지 스켈레톤 UI 적용
    
    ![movie-app-movie1](https://github.com/mangojang/movie-app/assets/42363123/f7b9bd61-9ce2-4470-be08-0307ac13a1cb)
    
    ![movie-app-movie2](https://github.com/mangojang/movie-app/assets/42363123/cbc958dc-2bc1-48d7-b11e-6f74761711d1)
    

## Contact

---

mangojang :  mangojang994@gmail.com

## License

---

MIT License

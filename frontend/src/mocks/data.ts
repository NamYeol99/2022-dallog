const matProfileDB = {
  id: 1,
  email: 'example@email.com',
  displayName: '매트',
  profileImageUrl: 'https://img.insight.co.kr/static/2020/05/04/700/51wlu5y2281iku1o0hms.jpg',
  socialType: 'GOOGLE',
};

const tigerProfileDB = {
  id: 2,
  email: 'tiger@dallog.com',
  displayName: '티거',
  profileImageUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBo4PPBaz3xqgKPEs8W2djKBXYb2D8PFDkZg&usqp=CAU',
  socialType: 'GOOGLE',
};

const categoryDB = {
  categories: [
    {
      id: 1,
      name: 'BE 공식 일정',
      createdAt: '2022-07-04T13:00:00',
      creator: matProfileDB,
    },
    {
      id: 2,
      name: '알록달록',
      createdAt: '2022-07-08T15:00:00',
      creator: matProfileDB,
    },
    {
      id: 3,
      name: '레벨 1 공원조',
      createdAt: '2022-07-05T13:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 4,
      name: '자바 스터디',
      createdAt: '2022-07-03T15:00:00',
      creator: matProfileDB,
    },
    {
      id: 5,
      name: '코틀린 스터디',
      createdAt: '2022-07-02T13:00:00',
      creator: matProfileDB,
    },
    {
      id: 6,
      name: '지원 플랫폼 근로',
      createdAt: '2022-07-01T15:00:00',
      creator: matProfileDB,
    },
    {
      id: 7,
      name: '레벨 2 준조',
      createdAt: '2022-07-08T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 8,
      name: '레벨 1 네오조',
      createdAt: '2022-07-12T15:00:00',
      creator: matProfileDB,
    },
    {
      id: 9,
      name: '매트의 아고라',
      createdAt: '2022-07-13T13:00:00',
      creator: matProfileDB,
    },
    {
      id: 10,
      name: '자바스크립트 스터디',
      createdAt: '2022-07-05T13:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 11,
      name: '리액트 스터디',
      createdAt: '2022-07-03T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 12,
      name: 'FE 공식 일정',
      createdAt: '2022-07-16T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 13,
      name: '레벨 2 브리조',
      createdAt: '2022-07-18T13:00:00',
      creator: matProfileDB,
    },
    {
      id: 14,
      name: '세미나',
      createdAt: '2022-07-20T15:00:00',
      creator: matProfileDB,
    },
    {
      id: 15,
      name: '네오 면담',
      createdAt: '2022-07-01T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 16,
      name: '공원 면담',
      createdAt: '2022-07-11T13:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 17,
      name: '포코 면담',
      createdAt: '2022-07-12T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 18,
      name: '포비의 수다 타임',
      createdAt: '2022-07-13T13:00:00',
      creator: matProfileDB,
    },
    {
      id: 19,
      name: '튼튼이 클럽',
      createdAt: '2022-07-13T13:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 20,
      name: '한강팟',
      createdAt: '2022-07-14T15:00:00',
      creator: tigerProfileDB,
    },
  ],
};

const myCategoryDB = {
  categories: [
    {
      id: 3,
      name: '레벨 1 공원조',
      createdAt: '2022-07-05T13:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 7,
      name: '레벨 2 준조',
      createdAt: '2022-07-08T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 10,
      name: '자바스크립트 스터디',
      createdAt: '2022-07-05T13:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 11,
      name: '리액트 스터디',
      createdAt: '2022-07-03T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 12,
      name: 'FE 공식 일정',
      createdAt: '2022-07-16T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 15,
      name: '네오 면담',
      createdAt: '2022-07-01T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 16,
      name: '공원 면담',
      createdAt: '2022-07-11T13:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 17,
      name: '포코 면담',
      createdAt: '2022-07-12T15:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 19,
      name: '튼튼이 클럽',
      createdAt: '2022-07-13T13:00:00',
      creator: tigerProfileDB,
    },
    {
      id: 20,
      name: '한강팟',
      createdAt: '2022-07-14T15:00:00',
      creator: tigerProfileDB,
    },
  ],
};

const scheduleDB = [
  {
    id: 1,
    title: '우테코 데모데이',
    startDateTime: '2022-07-07T14:00',
    endDateTime: '2022-07-07T18:00',
    memo: '달록팀 스프린트 1차 발표',
  },
  {
    id: 2,
    title: '테코톡',
    startDateTime: '2022-07-09T14:00',
    endDateTime: '2022-07-10T20:00',
    memo: '레벨3 첫 테코톡',
  },
  {
    id: 3,
    title: '후디 테코톡',
    startDateTime: '2022-07-17T00:00',
    endDateTime: '2022-07-18T00:00',
    memo: '후디 OAuth 테코톡',
  },
  {
    id: 4,
    title: '알록달록 회의2',
    startDateTime: '2022-07-17T13:00',
    endDateTime: '2022-07-21T07:00',
    memo: '알록달록 회의가 있어요',
  },
  {
    id: 5,
    title: '알록달록 회의',
    startDateTime: '2022-07-04T13:00',
    endDateTime: '2022-07-06T07:00',
    memo: '알록달록 회의가 있어요',
  },
  {
    id: 6,
    title: '달록 스프린트 회의',
    startDateTime: '2022-07-23T13:00',
    endDateTime: '2022-07-23T15:00',
    memo: '3차 스프린트 회의',
  },
];

const getScheduleDB = {
  longTerms: [
    {
      id: 1,
      title: '알록달록 회의',
      startDateTime: '2022-08-04T13:00',
      endDateTime: '2022-08-06T07:00',
      memo: '알록달록 회의가 있어요',
      categoryId: 1,
      color: '#123456',
    },
    {
      id: 2,
      title: '알록달록 회의2',
      startDateTime: '2022-08-17T13:00',
      endDateTime: '2022-08-21T07:00',
      memo: '알록달록 회의가 있어요',
      categoryId: 1,
      color: '#691210',
    },
    {
      id: 3,
      title: '알록달록 회의3',
      startDateTime: '2022-08-05T13:00',
      endDateTime: '2022-08-22T07:00',
      memo: '알록달록 회의가 있어요',
      categoryId: 1,
      color: '#fcc419',
    },
  ],

  allDays: [
    {
      id: 4,
      title: '테코톡',
      startDateTime: '2022-08-17T00:00',
      endDateTime: '2022-08-18T00:00',
      memo: '후디 OAuth 테코톡',
      categoryId: 1,
      color: '#fcc419',
    },
  ],

  fewHours: [
    {
      id: 5,
      title: '달록 스프린트 회의',
      startDateTime: '2022-08-23T13:00',
      endDateTime: '2022-08-23T15:00',
      memo: '3차 스프린트 회의',
      categoryId: 1,
      color: '#ffff13',
    },
  ],
};

const subscriptionDB = {
  subscriptions: [
    {
      id: 1,
      category: {
        id: 1,
        name: 'BE 공식일정',
        creator: {
          id: 1,
          email: 'example@email.com',
          displayName: 'example',
          profileImageUrl: '/image.png',
        },
        createdAt: '2022-07-19T16:42',
      },
      color: '#123efa',
    },
    {
      id: 2,
      category: {
        id: 2,
        name: '알록달록 팀 회의',
        creator: {
          id: 1,
          email: 'example@email.com',
          displayName: 'example',
          profileImageUrl: '/image.png',
        },
        createdAt: '2022-07-19T16:42',
      },
      color: '#123423',
    },
    {
      id: 3,
      category: {
        id: 5,
        name: '카테고리 5',
        creator: {
          id: 1,
          email: 'example@email.com',
          displayName: 'example',
          profileImageUrl: '/image.png',
        },
        createdAt: '2022-07-19T16:42',
      },
      color: '#876453',
    },
  ],
};

export {
  categoryDB,
  getScheduleDB,
  matProfileDB,
  myCategoryDB,
  scheduleDB,
  subscriptionDB,
  tigerProfileDB,
};

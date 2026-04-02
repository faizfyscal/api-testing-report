const dashboardData = [
  {
    section: "Auth",
    cards: [
      {
        title: "Reports",
        links: [{ label: "View Report", href: "/services/auth/report.html", tag: "latest" }],
      },
    ],
  },
  {
    section: "Payment Service",
    cards: [
      {
        title: "Accounts",
        links: [
          { label: "Latest", href: "../services/payment-service/accounts/latest/report.html", tag: "new" },
          { label: "2026-03-18", href: "services/payment-service/accounts/history/2026-03-18.html" },
        ],
      },
      {
        title: "Transactions",
        links: [
          { label: "Latest", href: "services/payment-service/transactions/latest/report.html", tag: "new" },
          { label: "2026-03-26", href: "services/payment-service/transactions/history/2026-03-26.html" },
        ],
      },
      {
        title: "Payments BO",
        subSections: [
          {
            title: "Accounts",
            links: [
              { label: "Latest", href: "services/payment-service/payments-bo/accounts/latest/report.html" },
              { label: "2026-03-11", href: "services/payment-service/payments-bo/accounts/history/2026-03-11.html" },
              { label: "2026-03-18", href: "services/payment-service/payments-bo/accounts/history/2026-03-18.html" },
            ],
          },
          {
            title: "Account Types",
            links: [
              { label: "Latest", href: "services/payment-service/payments-bo/account-types/latest/report.html" },
              { label: "2026-03-11", href: "services/payment-service/payments-bo/account-types/history/2026-03-11.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    section: "Digital goods & Services",
    cards: [
      {
        title: "Consumer",
        links: [{ label: "View Report", href: "services/goods-and-services/report.html", tag: "Latest" }],
      },
      {
        title: "Back-office",
        links: [{ label: "View Report", href: "services/goods-and-services/report2.html", tag: "Latest" }],
      },
    ],
  },
  {
    section: "KYC Service",
    cards: [
      {
        title: "Customer and KYC",
        links: [{ label: "View Report", href: "services/kyc/report.html", tag: "Latest" }],
      },
      {
        title: "KYC config and KYC client",
        links: [{ label: "View Report", href: "services/kyc/report2.html", tag: "Latest" }],
      },
    ],
  },
  {
    section: "User Service",
    cards: [{ title: "Reports", empty: true }],
  },

  {
  section: "Notification Service",
  cards: [
    {
      title: "Client",
      links: [
        {
          label: "Latest",
          href: "/services/notification-service/client.html",
          tag: "new",
        },
        // {
        //   label: "2026-03-30",
        //   href: "../services/notification-service/client/history/2026-03-30.html",
        // },
      ],
    },
    {
      title: "Preference",
      links: [
        {
          label: "Latest",
          href: "/services/notification-service/notificatio-preference.html",
          tag: "new",
        },
        // {
        //   label: "2026-03-30",
        //   href: "../services/notification-service/preference/history/2026-03-30.html",
        // },
      ],
    },
    {
      title: "Alert",
      links: [
        {
          label: "Latest",
          href: "/services/notification-service/notification-alert.html",
          tag: "new",
        },
        // {
        //   label: "2026-03-30",
        //   href: "/services/notification-service/alert/history/2026-03-30.html",
        // },
      ],
    },
    {
      title: "Template",
      links: [
        {
          label: "Latest",
          href: "/services/notification-service/template.html",
          tag: "new",
        },
        // {
        //   label: "2026-03-30",
        //   href: "/services/notification-service/template/history/2026-03-30.html",
        // },
      ],
    },
      {
      title: "Notification-alert-channel",
      links: [
        {
          label: "Latest",
          href: "/services/notification-service/notification-alert-channel.html",
          tag: "new",
        },
        // {
        //   label: "2026-03-30",
        //   href: "/services/notification-service/template/history/2026-03-30.html",
        // },
      ],
    },



  ],
}
];

export default dashboardData;

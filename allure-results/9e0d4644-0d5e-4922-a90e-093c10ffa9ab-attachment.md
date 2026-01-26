# Page snapshot

```yaml
- generic [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - img "SkillAccess Logo" [ref=e5]
      - img "Student Illustration" [ref=e6]
    - generic [ref=e9]:
      - generic [ref=e10]:
        - heading "Welcome" [level=1] [ref=e11]
        - paragraph [ref=e12]: Log In to Continue
      - generic [ref=e13]:
        - generic [ref=e15]:
          - text: Email Address
          - generic [ref=e16]:
            - img [ref=e17]
            - textbox "Enter here" [ref=e20]: ProdCol@yopmail.com
        - generic [ref=e22]:
          - text: Password
          - generic [ref=e23]:
            - img [ref=e24]
            - textbox "Enter here" [active] [ref=e27]: College@123
            - button "Show password" [ref=e28]:
              - img [ref=e29]
        - generic [ref=e32]:
          - generic [ref=e33]:
            - checkbox "Remember me" [ref=e34]
            - checkbox
            - generic [ref=e35] [cursor=pointer]: Remember me
          - link "Forgot password" [ref=e36] [cursor=pointer]:
            - /url: /auth/forgot-password
        - button "Sign in" [ref=e37]
  - region "Notifications alt+T"
  - alert [ref=e38]
```
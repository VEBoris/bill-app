/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"


describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    test("Then ...", () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      //to-do write assertion
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
       const file = new File(["foo"], "foo.txt", {
         type: "text/plain",
       });
       const inputFile = screen.getByTestId("file")
       const fileError = screen.getByTestId("file-error")
       const newbill = new NewBill({document, onNavigate, store: null, localStorage: window.localStorage})
       fireEvent.change(inputFile, {target: {files : [file]}})
       const e = {
        preventDefault() {},
        target: {
          value: "C:\\fakepath\\foo.txt"
        }
      }
       newbill.handleChangeFile(e)
       console.log(inputFile)
       expect(fileError.textContent).toBe("Veuillez choisir uniquement un fichier au format .jpg, .jpeg ou .png")
    })
  })
})

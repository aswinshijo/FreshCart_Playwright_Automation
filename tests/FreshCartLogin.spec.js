const {test,expect}=require('@playwright/test');
const {FreshCartLoginPage}=require('../pages/FreshCartLoginPage');
const data = require('../test-data/FreshCartTestData');

test('Launch Login page', async ({page}) => {
    const freshCartLoginPage=new FreshCartLoginPage(page);
    await freshCartLoginPage.navigate();
    await freshCartLoginPage.login(data.username,data.password);
    await expect(freshCartLoginPage.products.first()).toBeVisible();
    const totalProducts= await freshCartLoginPage.products.count();
    await freshCartLoginPage.getAllProductNames();
    await freshCartLoginPage.addProductToCart(data.Item);
    await expect(freshCartLoginPage.page.getByText("Product Added To Cart")).toBeVisible();
    await freshCartLoginPage.navigateToCart()
    const IsPresent = await freshCartLoginPage.verifyProductInCart(data.Item)
    expect(IsPresent).toBeTruthy()
});
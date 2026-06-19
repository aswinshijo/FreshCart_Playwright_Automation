class FreshCartLoginPage{
    constructor(page){
        this.page=page;

        this.username=page.locator('[type="email"]');
        this.password = page.locator('input#userPassword');
        this.SubmitButton = page.getByRole('Button',{name:"login"});
        this.products=page.locator('.card-body');
        this.CartButton=page.locator('[routerlink="/dashboard/cart"]');
        this.cartProducts=page.locator('.cartSection h3')

    }
    async navigate(){

        await this.page.goto('https://rahulshettyacademy.com/client');

    }

    async login(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.SubmitButton.click();

    }
    async getAllProductNames(){
        const count = await this.products.count();
        for(let prod=0;prod<count;prod++){
            const productName= await this.products.nth(prod).locator('b').textContent();
            console.log(productName);
            cons
        }
    }

    async addProductToCart(productNameIn){
        const count = await this.products.count();
        for(let prod=0;prod<count;prod++){
            const productName= await this.products.nth(prod).locator('b').textContent();
            if(productName===productNameIn){
                await this.products.nth(prod).getByText("Add To Cart").click();
                break;
            }
        }
    }

    async navigateToCart(){
        await this.CartButton.click()
    }
    async verifyProductInCart(productName){
        
       const cartProduct=await this.cartProducts.nth(i).textContent()
       if(cartProduct.trim() ===productName){
        return true
       }

    }}


module.exports ={FreshCartLoginPage};
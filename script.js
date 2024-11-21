function HostingPlan(name, price, features, support) {
    this.name = name;
    this.price = price;
    this.features = features;
    this.support = support;
}

const basicPlan = new HostingPlan("Basic", "$5/month", [
    "10GB Storage",
    "100GB Bandwidth",
    "1 Domain"
], "Email Support");

const proPlan = new HostingPlan("Pro", "$15/month", [
    "50GB Storage",
    "500GB Bandwidth",
    "5 Domains"
], "Email + Phone Support");

const businessPlan = new HostingPlan("Business", "$25/month", [
    "Unlimited Storage",
    "Unlimited Bandwidth",
    "Unlimited Domains"
], "24/7 Support");

const plansContainer = document.querySelector(".plans-container");

const plans = [basicPlan, proPlan, businessPlan];

plans.forEach(plan => {
    const planCard = document.createElement("div");
    planCard.classList.add("plan-card");

    const planName = document.createElement("h2");
    planName.classList.add("plan-name");
    planName.textContent = plan.name;

    const planPrice = document.createElement("p");
    planPrice.classList.add("plan-price");
    planPrice.textContent = plan.price;

    const featuresList = document.createElement("ul");
    featuresList.classList.add("features-list");
    plan.features.forEach(feature => {
        const featureItem = document.createElement("li");
        featureItem.textContent = feature;
        featuresList.appendChild(featureItem);
    });

    const supportText = document.createElement("p");
    supportText.textContent = `Support: ${plan.support}`;

    const buyNowBtn = document.createElement("button");
    buyNowBtn.classList.add("buy-now-btn");
    buyNowBtn.textContent = "Buy Now";
    buyNowBtn.addEventListener("click", () => {
        alert(`You have selected the ${plan.name} plan for ${plan.price}.`);
    });

    planCard.appendChild(planName);
    planCard.appendChild(planPrice);
    planCard.appendChild(featuresList);
    planCard.appendChild(supportText);
    planCard.appendChild(buyNowBtn);

    plansContainer.appendChild(planCard);
});
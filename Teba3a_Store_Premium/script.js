function orderProduct(productName) {

    const phone = "201205899826";

    const message =
        `السلام عليكم، أريد طلب: ${productName} من Teba3a Store`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}
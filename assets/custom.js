function setBadgeOnSale() {
  try {
    const pendingCards = Array.from(document.querySelectorAll('.product-card'));

    const timer = setInterval(() => {
      try {
        for (let i = pendingCards.length - 1; i >= 0; i--) {
          const card = pendingCards[i];

          const a = card.querySelector('.badge.badge--on-sale');
          const b = card.querySelector('.elsklip-coupon-box .elsklip-coupon__shape');

          // a 还没渲染，继续等
          if (!a) continue;

          // b 还没被插件插入，继续等
          if (!b) continue;

          const html = b.innerHTML?.trim();
          if (!html) continue;

          // 同步成功
          a.innerHTML = html;
          pendingCards.splice(i, 1);
        }

        // 全部完成后关闭
        if (pendingCards.length === 0) {
          clearInterval(timer);
        }
      } catch (err) {
        console.error(err);
        clearInterval(timer);
      }
    }, 200);

  }catch (e) {
    console.log(e);
  }
};
setBadgeOnSale();

function elsklipCouponSkeleton () {
  try {
    const elsklipCouponBox = document.querySelector('.elsklip-coupon-box');
    const productId = elsklipCouponBox.getAttribute('data-product-id');
    const productRerender = document.querySelector('product-rerender');
    const realProductId = productRerender.getAttribute('data-product-id');

    if(productId === realProductId) {
      elsklipCouponBox.innerHTML = `<div class="placeholder-elsklip-coupon">
        <style>
          .placeholder-elsklip-coupon:has(+ .elsklip-coupon) {
            display: none;
          }
        </style>
        <div class="elsklip-coupon  " data-cid="6932b162a0f6e50cb9806c2b">


          <div class="elsklip-coupon__widget" style="padding:6px;border-radius:7px;border-color:#b7b7b7;background:#ffffff00;border-style:dashed;border-width:3px;width:350px">

            <span style="font-size:20px;font-weight:700;color:#000000">Official Web Exclusive Price</span>
            <div class="elsklip-coupon__container">

              <div style="font-size:17px;font-weight:700;color:#ffffff;background:#EA0F30" class="elsklip-coupon__shape elsklip-coupon__shape--flag">Save discount on this product, Please check the box later.</div>
            </div>

          </div>
          <span class="elsklip-coupon__limit" style="font-size:12px;font-weight:700;color:#000000"></span>
          <div style="width:100%;padding:0;border-radius:0;background-color:transparent;border-style:none"></div>
          <div style="width: 100%">
            <div style="" class="elsklip-timer-container elsklip-timer-container--row">
              <span class="elsklip-timer-label" style="font-size:14px;font-weight:700;color:#000000">⏰ Hurry up! Sale ends in</span>
              <div class="elsklip-countdown" style="background-color:#ffffff00;padding:0px;gap:8px;border-radius:0px;border-style:solid;border-width:0px;border-color:#ffffff00">

                <div class="elsklip-time-section" style="display:flex;">
                  <div class="elsklip-time-box" style="background-color:#616161;border-color:#ffffff00;border-radius:4px;border-width:0px;border-style:none;width:24px;font-size:13px;font-weight:700;color:#FFFFFF;font-style:normal;text-decoration:none">
                    <div class="els-time-box-value">
                      <span class="digit" id="days1">0</span>
                      <span class="digit" id="days2">0</span>

                    </div>
                    <span class="els-time-box-colon" style="--els-time-box-colon-right:
                -4px
              ;--els-time-box-colon-font-size:13px;--els-time-box-colon-color:#616161;display:none">:</span>

                  </div>
                  <span class="els-time-box-outside-text" style="font-size:10px;font-weight:700;color:#616161;text-transform:uppercase;font-style:normal;text-decoration:none">
              days
            </span>
                </div>

                <div class="elsklip-time-section" style="display:flex;">
                  <div class="elsklip-time-box" style="background-color:#616161;border-color:#ffffff00;border-radius:4px;border-width:0px;border-style:none;width:24px;font-size:13px;font-weight:700;color:#FFFFFF;font-style:normal;text-decoration:none">
                    <div class="els-time-box-value">
                      <span class="digit" id="hrs1">0</span>
                      <span class="digit" id="hrs2">0</span>

                    </div>
                    <span class="els-time-box-colon" style="--els-time-box-colon-right:
                -4px
              ;--els-time-box-colon-font-size:13px;--els-time-box-colon-color:#616161;display:none">:</span>

                  </div>
                  <span class="els-time-box-outside-text" style="font-size:10px;font-weight:700;color:#616161;text-transform:uppercase;font-style:normal;text-decoration:none">
              hrs
            </span>
                </div>

                <div class="elsklip-time-section" style="display:flex;">
                  <div class="elsklip-time-box" style="background-color:#616161;border-color:#ffffff00;border-radius:4px;border-width:0px;border-style:none;width:24px;font-size:13px;font-weight:700;color:#FFFFFF;font-style:normal;text-decoration:none">
                    <div class="els-time-box-value">
                      <span class="digit" id="mins1">0</span>
                      <span class="digit" id="mins2">0</span>

                    </div>
                    <span class="els-time-box-colon" style="--els-time-box-colon-right:
                -4px
              ;--els-time-box-colon-font-size:13px;--els-time-box-colon-color:#616161;display:none">:</span>

                  </div>
                  <span class="els-time-box-outside-text" style="font-size:10px;font-weight:700;color:#616161;text-transform:uppercase;font-style:normal;text-decoration:none">
              mins
            </span>
                </div>

                <div class="elsklip-time-section" style="display:flex;">
                  <div class="elsklip-time-box" style="background-color:#616161;border-color:#ffffff00;border-radius:4px;border-width:0px;border-style:none;width:24px;font-size:13px;font-weight:700;color:#FFFFFF;font-style:normal;text-decoration:none">
                    <div class="els-time-box-value">
                      <span class="digit" id="secs1">0</span>
                      <span class="digit" id="secs2">0</span>

                    </div>
                    <span class="els-time-box-colon" style="--els-time-box-colon-right:
                -4px
              ;--els-time-box-colon-font-size:13px;--els-time-box-colon-color:#616161;display:none">:</span>

                  </div>
                  <span class="els-time-box-outside-text" style="font-size:10px;font-weight:700;color:#616161;text-transform:uppercase;font-style:normal;text-decoration:none">
              secs
            </span>
                </div>

              </div>
            </div>
          </div></div>
      </div>`
    }
  }catch (e) {
    console.log(e);
  }
}
// elsklipCouponSkeleton();

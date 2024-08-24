// active class in side bar
var currentPath = location.pathname;
var pathSegments = currentPath.split('/');
var lastSegment = pathSegments[pathSegments.length - 1];
console.log(lastSegment);
document.querySelector(`.admin_siderbarr .sidebar-link[href="${lastSegment}"]`).classList.add('active');
$('#admin_siderbarr .sidebar-link').each(function () {
    var $this = $(this);
    if ($this.attr('href').indexOf(current) !== -1) {
        document.querySelector(`.admin_siderbarr .sidebar-link[href="${lastSegment}"]`).classList.add('active');
    }
})

$(document).ready(function () {
    function checkActive() {
        $('.item').each(function () {
            if ($(this).find('.sidebar-link.active').length > 0) {
                $(this).find('.dropdown-btn').addClass('active');
            } else {
                $(this).find('.dropdown-btn').removeClass('active');
            }
        });
    }
    checkActive();
});

// Initialize the sidebar based on localStorage
const sidebarData = localStorage.getItem('sidebar-active') === 'true';
if (sidebarData) {
    $('.admin_siderbarr').addClass('admin_siderbarr_open');
    $('.admin_contentpart').addClass('admin_contentpart_open');
    $('.main-content').addClass('admin_contentpart_main');
} else {
    $('.admin_siderbarr').removeClass('admin_siderbarr_open');
    $('.admin_contentpart').removeClass('admin_contentpart_open');
    $('.main-content').removeClass('admin_contentpart_main');
}

// Toggle sidebar and update localStorage
function sideBarToggle() {
    const isSidebarOpen = $('.admin_siderbarr').hasClass('admin_siderbarr_open');
    if (isSidebarOpen) {
        $('.admin_siderbarr').removeClass('admin_siderbarr_open');
        $('.admin_contentpart').removeClass('admin_contentpart_open');
        $('.main-content').removeClass('admin_contentpart_main');
        localStorage.setItem('sidebar-active', 'false');
    } else {
        $('.admin_siderbarr').addClass('admin_siderbarr_open');
        $('.admin_contentpart').addClass('admin_contentpart_open');
        $('.main-content').addClass('admin_contentpart_main');
        localStorage.setItem('sidebar-active', 'true');
    }
}
function add_image(element) {
    event.preventDefault();
    $(element).addClass('d-none');
}
$(document).ready(function () {
    $('.view-order-btn').on('click', function () {
        $('.order-details').addClass('active');
    });
});
function close_orderDetail() {
    $('.order-details').removeClass('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs1 = document.querySelectorAll('#reportsTab .nav-link');
    const customSlide2 = document.querySelector('.custom-slide-2');
    const tabs2 = document.querySelectorAll('#orderTabs .nav-link');
    const customSlide = document.querySelector('.custom-slide');

    function updateCustomSlide(slide, tabs, index) {
        let offset = 6;
        for (let i = 0; i < index; i++) {
            offset += tabs[i].offsetWidth;
        }
        slide.style.width = tabs[index].offsetWidth + 'px';
        slide.style.left = offset + 'px';
    }

    tabs1.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            updateCustomSlide(customSlide2, tabs1, index);
        });
    });

    tabs2.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            updateCustomSlide(customSlide, tabs2, index);
        });
    });
});

$(document).ready(function () {
    $(".openCategoryBtn").on('click', function () {
        setTimeout(() => {
            $('#AddCategoryModal').addClass('d-block');
        }, 300);
    });
    $("#CloseCategoryForm").on('click', function () {
        setTimeout(() => {
            $('#AddCategoryModal').removeClass('d-block');
        }, 300);
    });
    $(".openEditModal").on('click', function () {
        setTimeout(() => {
            $('#EditModal').addClass('d-block');
        }, 300);
    });
    $("#CloseEdit").on('click', function () {
        setTimeout(() => {
            $('#EditModal').removeClass('d-block');
        }, 300);
    });
    $(".UpdateModal").on('click', function () {
        setTimeout(() => {
            $('#UpdateModal').addClass('d-block');
        }, 300);
    });
    $("#CloseUpdate").on('click', function () {
        setTimeout(() => {
            $('#UpdateModal').removeClass('d-block');
        }, 300);
    });
});
document.querySelectorAll('.drop-area input[type="file"]').forEach(function (inputElement) {
    inputElement.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imgView = inputElement.nextElementSibling;
                imgView.style.backgroundImage = `url(${e.target.result})`;
                imgView.classList.add('has-image');
            }

            reader.readAsDataURL(file);
        }
    });
});